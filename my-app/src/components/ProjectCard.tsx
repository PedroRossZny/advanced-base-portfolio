"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Expand, Shrink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

interface ProjectCardProps {
  projectId?: string;
  title: string;
  summary: string;
  imageSrc: string;
  iconSrc: string;
  techs: string;
  children: ReactNode;
  activeFilter?: string;
}

interface ProjectCardsProviderProps {
  children: ReactNode;
}

interface ProjectCardsContextValue {
  expandedOrder: string[];
  projectOrder: string[];
  registerProject: (projectId: string) => void;
  unregisterProject: (projectId: string) => void;
  toggleProject: (projectId: string) => void;
}

const ProjectCardsContext = createContext<ProjectCardsContextValue | null>(null);
const MOBILE_SCROLL_BREAKPOINT = 1050;
const MOBILE_SCROLL_OFFSET = 15;
const DESKTOP_SCROLL_OFFSET = 20;
const EXPAND_SCROLL_DELAY_MS = 50;

function buildProjectId(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function scrollProjectIntoView(element: HTMLElement, behavior: ScrollBehavior, extraTopOffset = 0) {
  const detailsElement = document.getElementById("detalhes");
  const headerHeight = document.querySelector("header")?.clientHeight ?? 0;

  if (window.innerWidth <= MOBILE_SCROLL_BREAKPOINT || !detailsElement) {
    const projectTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(projectTop - headerHeight - MOBILE_SCROLL_OFFSET - extraTopOffset, 0),
      behavior,
    });

    return;
  }

  detailsElement.scrollTo({
    top: Math.max(element.offsetTop - DESKTOP_SCROLL_OFFSET - extraTopOffset, 0),
    behavior,
  });
}

function useProjectCards() {
  const context = useContext(ProjectCardsContext);

  if (!context) {
    throw new Error("ProjectCard must be used within ProjectCardsProvider.");
  }

  return context;
}

export function ProjectCardsProvider({ children }: ProjectCardsProviderProps) {
  const [expandedOrder, setExpandedOrder] = useState<string[]>([]);
  const [projectOrder, setProjectOrder] = useState<string[]>([]);

  const registerProject = useCallback((projectId: string) => {
    setProjectOrder((currentOrder) => {
      if (currentOrder.includes(projectId)) {
        return currentOrder;
      }

      return [...currentOrder, projectId];
    });
  }, []);

  const unregisterProject = useCallback((projectId: string) => {
    setProjectOrder((currentOrder) => currentOrder.filter((id) => id !== projectId));
    setExpandedOrder((currentOrder) => currentOrder.filter((id) => id !== projectId));
  }, []);

  const toggleProject = useCallback((projectId: string) => {
    setExpandedOrder((currentOrder) => {
      if (currentOrder.includes(projectId)) {
        return currentOrder.filter((id) => id !== projectId);
      }

      return [...currentOrder, projectId];
    });
  }, []);

  const value = useMemo(
    () => ({
      expandedOrder,
      projectOrder,
      registerProject,
      unregisterProject,
      toggleProject,
    }),
    [expandedOrder, projectOrder, registerProject, toggleProject, unregisterProject],
  );

  return <ProjectCardsContext.Provider value={value}>{children}</ProjectCardsContext.Provider>;
}

export default function ProjectCard({
  projectId,
  title,
  summary,
  imageSrc,
  iconSrc,
  techs,
  children,
  activeFilter,
}: ProjectCardProps) {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const stableProjectId = useMemo(() => projectId ?? buildProjectId(title), [projectId, title]);
  const cardRef = useRef<HTMLElement | null>(null);
  const toggleAreaRef = useRef<HTMLDivElement | null>(null);
  const pendingScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const { expandedOrder, projectOrder, registerProject, unregisterProject, toggleProject } =
    useProjectCards();

  const clearPendingScroll = useCallback(() => {
    pendingScrollRef.current = false;

    if (scrollTimeoutRef.current !== null) {
      window.clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    registerProject(stableProjectId);

    return () => {
      clearPendingScroll();
      unregisterProject(stableProjectId);
    };
  }, [clearPendingScroll, registerProject, stableProjectId, unregisterProject]);

  const techTokens = techs.split(/\s+/).filter(Boolean);
  const isVisible = !activeFilter || techTokens.includes(activeFilter);
  const expandedIndex = expandedOrder.indexOf(stableProjectId);
  const baseIndex = projectOrder.indexOf(stableProjectId);
  const isExpanded = expandedIndex !== -1;
  const visualOrder = isExpanded
    ? expandedIndex
    : expandedOrder.length + (baseIndex === -1 ? projectOrder.length : baseIndex);

  const handleToggle = () => {
    const nextExpandedState = !isExpanded;
    clearPendingScroll();
    toggleProject(stableProjectId);

    if (!nextExpandedState || !cardRef.current) {
      return;
    }

    pendingScrollRef.current = true;
    const targetCard = cardRef.current;
    const toggleAreaHeight = toggleAreaRef.current?.offsetHeight ?? 0;

    scrollTimeoutRef.current = window.setTimeout(() => {
      scrollTimeoutRef.current = null;

      if (!pendingScrollRef.current || !targetCard.isConnected) {
        return;
      }

      pendingScrollRef.current = false;
      scrollProjectIntoView(targetCard, prefersReducedMotion ? "auto" : "smooth", toggleAreaHeight);
    }, prefersReducedMotion ? 0 : EXPAND_SCROLL_DELAY_MS);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <motion.article
      ref={cardRef}
      layout="size"
      initial={false}
      style={{ order: visualOrder }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              layout: { type: "spring", stiffness: 240, damping: 30 },
              opacity: { duration: 0.24 },
            }
      }
      className={[
        "projeto flex h-full flex-col self-stretch overflow-hidden rounded-2xl border bg-(--fundo-principal)",
        "transition-[transform,box-shadow,border-color] duration-500",
        isExpanded
          ? "z-20 border-(--destaque) shadow-[0_28px_80px_rgba(15,23,42,0.22)] md:col-span-2 xl:col-span-3"
          : "border-(--borda) shadow-sm hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]",
      ].join(" ")}
    >
      <motion.div ref={toggleAreaRef} layout="position" className="flex justify-end pb-2 pl-3 pr-2 pt-2">
        <motion.button
          type="button"
          onClick={handleToggle}
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.28, ease: "easeOut" }}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.06 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
          aria-expanded={isExpanded}
          aria-label={t(isExpanded ? "collapse-project" : "expand-project", { title })}
          className={[
            "origin-center cursor-pointer rounded-full p-2 transition-colors duration-300",
            isExpanded
              ? "text-(--destaque)"
              : "text-(--texto-mutado) hover:text-(--destaque)",
          ].join(" ")}
        >
          {isExpanded ? <Shrink size={20} /> : <Expand size={20} />}
        </motion.button>
      </motion.div>

      <AnimatePresence initial={false}>
        {!isExpanded && (
          <motion.div
            key="cover-image"
            initial={prefersReducedMotion ? false : { height: 192, opacity: 1 }}
            animate={{ height: 192, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.36, ease: [0.22, 1, 0.36, 1] }
            }
            className="relative w-full overflow-hidden border-b border-(--borda)"
          >
            <div className="relative h-48 w-full">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        layout
        className={["flex grow items-center gap-4 px-5", isExpanded ? "pb-4 pt-3 md:px-6" : "py-5"].join(" ")}
      >
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="project-icon"
              initial={{ width: 0, opacity: 0, marginRight: 0 }}
              animate={{ width: 52, opacity: 1, marginRight: 0 }}
              exit={{ width: 0, opacity: 0, marginRight: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
              }
              className="relative hidden h-13 w-13 shrink-0 overflow-hidden rounded-xl border border-(--borda) bg-(--fundo-principal) md:block"
            >
              <Image
                src={iconSrc}
                alt={t("project-icon-alt", { title })}
                fill
                className="object-contain p-1.5"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex grow flex-col">
          <h3 className="text-lg font-poppins font-semibold leading-tight text-(--texto) md:text-[1.15rem]">
            {title}
          </h3>
          <p
            className={[
              "mt-1 text-(--texto-mutado) transition-[font-size,transform] duration-300",
              isExpanded ? "text-sm md:text-[0.95rem]" : "text-xs",
            ].join(" ")}
          >
            {summary}
          </p>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="expanded-content"
            initial={prefersReducedMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0, y: -8 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
            }
            className="overflow-hidden border-t border-(--borda) bg-(--fundo-card)"
          >
            <motion.div
              layout
              className="px-5 pb-5 pt-3 text-sm leading-relaxed text-(--texto) md:px-6 md:pb-6"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
