/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useEffect, useMemo, useRef, useState} from 'react';
import {Check, Copy, Download, Moon, Sun, Trash2} from 'lucide-react';

const STORAGE_CONTENT_KEY = 'blank-sheet:content';
const STORAGE_TITLE_KEY = 'blank-sheet:title';
const STORAGE_THEME_KEY = 'blank-sheet:theme';
const STORAGE_FONT_KEY = 'blank-sheet:font';

type FontMode = 'sans' | 'serif';

function readStoredValue(key: string, fallback: string): string {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [title, setTitle] = useState<string>(() => readStoredValue(STORAGE_TITLE_KEY, ''));
  const [content, setContent] = useState<string>(() => readStoredValue(STORAGE_CONTENT_KEY, ''));
  const [fontMode, setFontMode] = useState<FontMode>(() => {
    const saved = readStoredValue(STORAGE_FONT_KEY, 'sans');
    return saved === 'serif' ? 'serif' : 'sans';
  });
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = readStoredValue(STORAGE_THEME_KEY, '');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  });

  const [copied, setCopied] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_THEME_KEY, isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [isDark]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_TITLE_KEY, title);
    } catch {
      // Ignore storage errors
    }
  }, [title]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_CONTENT_KEY, content);
    } catch {
      // Ignore storage errors
    }
  }, [content]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_FONT_KEY, fontMode);
    } catch {
      // Ignore storage errors
    }
  }, [fontMode]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    if (!confirmClear) return;
    const timer = window.setTimeout(() => setConfirmClear(false), 4000);
    return () => window.clearTimeout(timer);
  }, [confirmClear]);

  const stats = useMemo(() => {
    const trimmed = content.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const chars = content.length;
    return {words, chars};
  }, [content]);

  const hasText = title.trim().length > 0 || content.length > 0;

  const handleCopy = async () => {
    const fullText = [title.trim(), content].filter(Boolean).join('\n\n');
    if (!fullText) return;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
    } catch {
      // Fallback copy via temporary selection if clipboard API is unavailable
      if (textareaRef.current) {
        textareaRef.current.select();
        document.execCommand('copy');
        setCopied(true);
      }
    }
  };

  const handleDownload = () => {
    const fullText = [title.trim(), content].filter(Boolean).join('\n\n');
    if (!fullText) return;
    const slug = (title.trim() || 'blank-sheet')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    const blob = new Blob([fullText], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${slug || 'blank-sheet'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    if (!hasText) return;
    if (!confirmClear) {
      setConfirmClear(true);
      return;
    }
    setTitle('');
    setContent('');
    setConfirmClear(false);
    textareaRef.current?.focus();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#0B0B0C] text-zinc-900 dark:text-zinc-100 transition-colors duration-150">
      <header className="w-full px-5 sm:px-8 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <span className="text-sm font-medium tracking-tight text-zinc-500 dark:text-zinc-400 whitespace-nowrap shrink-0">
            Blank Sheet
          </span>
          <span
            aria-live="polite"
            className="hidden sm:inline-flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 tabular-nums whitespace-nowrap"
          >
            <span>{stats.words} {stats.words === 1 ? 'word' : 'words'}</span>
            <span aria-hidden="true">·</span>
            <span>{stats.chars} {stats.chars === 1 ? 'char' : 'chars'}</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div
            role="group"
            aria-label="Typography style"
            className="flex items-center p-0.5 rounded-lg bg-zinc-200/70 dark:bg-zinc-800/80"
          >
            <button
              type="button"
              onClick={() => setFontMode('sans')}
              className={`min-h-9 px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100 ${
                fontMode === 'sans'
                  ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Sans
            </button>
            <button
              type="button"
              onClick={() => setFontMode('serif')}
              className={`min-h-9 px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100 ${
                fontMode === 'serif'
                  ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Serif
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            disabled={!hasText}
            aria-label="Copy text"
            className="min-h-10 px-3 py-2 inline-flex items-center gap-1.5 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80 disabled:opacity-35 disabled:pointer-events-none transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100"
          >
            {copied ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5" aria-hidden="true" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            disabled={!hasText}
            aria-label="Download text file"
            className="min-h-10 px-3 py-2 inline-flex items-center gap-1.5 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80 disabled:opacity-35 disabled:pointer-events-none transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Download</span>
          </button>

          {confirmClear ? (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClear}
                className="min-h-10 px-3 py-2 rounded-lg text-xs font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100"
              >
                Clear all
              </button>
              <button
                type="button"
                onClick={() => setConfirmClear(false)}
                className="min-h-10 px-2.5 py-2 rounded-lg text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleClear}
              disabled={!hasText}
              aria-label="Clear sheet"
              className="min-h-10 px-3 py-2 inline-flex items-center gap-1.5 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80 disabled:opacity-35 disabled:pointer-events-none transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100"
            >
              <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Clear</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="min-h-10 min-w-10 p-2 inline-flex items-center justify-center rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80 transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100"
          >
            {isDark ? <Sun className="w-4 h-4" aria-hidden="true" /> : <Moon className="w-4 h-4" aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-6 sm:px-10 pt-8 sm:pt-14 pb-16 flex flex-col">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled"
          aria-label="Document title"
          className={`w-full bg-transparent border-0 outline-none text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-300 dark:placeholder:text-zinc-700 mb-5 ${
            fontMode === 'serif' ? 'font-editor-serif' : 'font-editor-sans'
          }`}
        />

        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing..."
          aria-label="Blank writing sheet"
          autoFocus
          spellCheck
          className={`w-full flex-1 min-h-[65vh] resize-none bg-transparent border-0 outline-none text-base sm:text-[17px] leading-[1.75] text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-300 dark:placeholder:text-zinc-700 ${
            fontMode === 'serif' ? 'font-editor-serif' : 'font-editor-sans'
          }`}
        />
      </main>
    </div>
  );
}
