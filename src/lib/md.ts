import { marked } from 'marked';

/** Render a short inline-Markdown string (**bold**, *italic*, [links](url)) to HTML. */
export const md = (text: string) => marked.parseInline(text, { async: false }) as string;
