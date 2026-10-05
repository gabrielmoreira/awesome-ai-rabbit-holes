<!-- This file is generated. Do not edit it directly. Submit tools through config/sources.yml. -->
# Document AI & OCR

Tools that read documents — turning scans, PDFs, screenshots, and office files into text, structure, or extracted fields.

_21 entries in 4 sections, ranked by stars. Each section opens with its top 30; the rest of that section waits behind the **▸ more** panel at its end._

## Contents

- [OCR Engines](#ocr-engines) — 3
- [Document Parsing & Layout](#document-parsing--layout) — 14
- [File Conversion & Markdown](#file-conversion--markdown) — 3
- [Extraction & Structured Output](#extraction--structured-output) — 1

## OCR Engines

- **[GLM-OCR](https://huggingface.co/zai-org/GLM-OCR)** GLM-OCR is a vision-language model specialized in optical character recognition and document understanding tasks. <details><summary>More about</summary>

  Enables developers to integrate high-accuracy OCR and document parsing into applications via Hugging Face model access.

  _Another model card that makes you wonder if 'open source' just means you get to debug someone else's research checkpoint._

  `ocr` `vision` `document-ai`
  </details>
- **[PaddleOCR-VL](https://huggingface.co/PaddlePaddle/PaddleOCR-VL)** PaddleOCR-VL is a multimodal vision-language model from PaddlePaddle optimized for document parsing and OCR tasks. <details><summary>More about</summary>

  Improves automated extraction of text, tables, and layout from scanned documents, which is useful in developer workflows involving data ingestion or document processing pipelines.

  _Yet another vision model promising to 'understand' your PDFs, while you still manually reformat the output into something usable._

  `ocr` `document-ai` `vision-language`
  </details>
- **[PaddleOCR-VL-1.5](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.5)** PaddleOCR-VL-1.5 is a Hugging Face vision-language model for document understanding, combining OCR with layout and table extraction. <details><summary>More about</summary>

  It helps developers extract structured data from scanned documents and images for downstream LLM pipelines.

  _Yet another vision model promising to fix your PDF hell, while you secretly just want it to work on receipts._

  `ocr` `document-ai` `vision-language`
  </details>

## Document Parsing & Layout

- **[PaddleOCR](https://github.com/paddlepaddle/paddleocr)** `⭐ 90.5k` `updated ≤90d` A lightweight, multilingual OCR toolkit that converts images and PDFs into structured data formats like JSON and Markdown for use in LLM pipelines. <details><summary>More about</summary>

  It provides the document ingestion layer necessary to feed clean, structured context into RAG systems and AI agents without relying on brittle, closed-source parsers.

  _We have successfully abstracted the problem of reading a PDF into a 70k-star repository dependency, ensuring our AI workflows are now bottlenecked by OCR preprocessing rather than the model itself._

  `ocr` `document-ai` `rag` `pdf-parsing` `paddlepaddle`
  </details>
- **[MinerU](https://github.com/opendatalab/mineru)** `⭐ 81k` `updated ≤90d` MinerU is a Python toolkit that parses PDFs, Office documents, and other complex files into markdown or JSON structured for LLM and agent pipelines. <details><summary>More about</summary>

  It removes the boilerplate of layout analysis, OCR, and table extraction so developers can feed clean, structured documents directly into RAG systems and coding agents.

  _Another essential brick in the modern stack that exists solely because we decided it was easier to parse a thousand PDFs than read them._

  `pdf-parser` `rag` `document-extraction` `llm-tooling` `python`
  </details>
- **[Docling](https://github.com/docling-project/docling)** 🔥 `⭐ 68.3k` `updated ≤30d` Docling is a document parsing library that converts PDF, DOCX, PPTX, HTML, and other formats into structured Markdown or JSON for AI workflows. <details><summary>More about</summary>

  It lets developers reliably extract clean text and tables from complex documents to feed LLMs, reducing hallucinations from poor input parsing.

  _Another tool promising to solve 'AI-ready documents' while secretly adding another YAML config and dependency tree to your RAG pipeline._

  `document-parsing` `rag` `llm-ingestion`
  </details>
- **[Zerox](https://github.com/getomni-ai/zerox)** `⭐ 12.3k` `updated >1y` An OCR and document extraction tool that leverages vision models to convert complex documents into structured data. <details><summary>More about</summary>

  It enables developers to build robust pipelines that can parse unstructured PDFs and images using the same reasoning capabilities as large multimodal models.

  _Now you have no excuse for not building that automated invoice parser you've been procrastinating on for six months._

  `ocr` `document-extraction` `vision-models` `data-processing`
  </details>
- **[PDF-Extract-Kit](https://github.com/opendatalab/pdf-extract-kit)** `⭐ 10k` `updated >1y` A modular Python toolkit that bundles fine-tuned models for layout detection, OCR, formula recognition, and table extraction to parse complex PDF documents into structured content. <details><summary>More about</summary>

  It provides the high-quality document parsing layer needed to feed clean, structured data into LLMs for RAG, document Q&A, and translation workflows.

  _Yet another reminder that while agents can write entire apps, we still need a dedicated AI toolkit just to convince a PDF it contains readable text._

  `pdf-parsing` `document-extraction` `ocr` `llm-tooling` `models`
  </details>
- **[MegaParse](https://github.com/quivrhq/megaparse)** `⭐ 7.4k` `updated >1y` A Python-based document parser optimized for LLM ingestion that converts PDFs, Word, PowerPoint, and Excel files into structured text with minimal information loss. <details><summary>More about</summary>

  It provides a specialized preprocessing pipeline for developers building RAG systems or AI workflows that need to ingest complex business documents without losing tables, headers, or structure.

  _Yet another library promising to solve the 'PDF-to-LLM' pipeline, ensuring you can now feed your model 7,000 words of boilerplate Terms of Service with unprecedented fidelity._

  `parser` `llm-ingestion` `rag` `document-processing` `python`
  </details>
- **[OCRFlux](https://github.com/chatdoc-com/ocrflux)** `⭐ 2.5k` `updated ≤180d` OCRFlux is a lightweight multimodal toolkit for advanced PDF-to-Markdown conversion, specializing in complex layouts, tables, and cross-page content merging. <details><summary>More about</summary>

  Developers handling PDFs can now extract structured Markdown with higher fidelity, preserving tables and multi-page context that most OCR tools lose.

  _Finally, a tool that treats PDFs like they’re written by humans, not by a printer that hates you._

  `pdf-ocr` `markdown-conversion` `multimodal` `document-processing`
  </details>
- **[Kentucky-ai/opentakeoff](https://github.com/kentucky-ai/opentakeoff)** `⭐ 149` `updated ≤90d` Open-source (Apache-2.0) PDF takeoff for construction & flooring — the first engine an AI agent drives natively over MCP, not bolted on. One-click room detection, materials + quantities, built for preconstruction. Runs entirely in your browser.
- **[pdfmux](https://github.com/nameetp/pdfmux)** `⭐ 82` `updated ≤90d` A self-healing PDF extraction CLI and Python library that routes pages through multiple backends and audits output quality, with optional LLM fallbacks and an MCP server for Claude Desktop. <details><summary>More about</summary>

  It gives developers a single pipeline to get clean Markdown or JSON out of messy PDFs for RAG and LLM workflows, with confidence scoring and automatic re-extraction.

  _Another essential piece of infrastructure for the modern stack where half your context window is fighting with a PDF that swore it had a reading order._

  `pdf-extraction` `rag` `mcp` `self-healing` `cli`
  </details>
- **[misbahsy/doc-router](https://github.com/misbahsy/doc-router)** `⭐ 28` doc-router - Routes PDF pages between local text extraction and OCR using optional Jev judgments, with a Rust CLI and Python bindings. Project guide.
- **[bzsanti/oxidize-python](https://github.com/bzsanti/oxidize-python)** `⭐ 5` `updated ≤30d` A Rust-powered Python library for PDF generation, parsing, and manipulation that includes a built-in MCP server. <details><summary>More about</summary>

  It allows AI agents to perform complex PDF operations like text extraction, conversion to RAG-optimized formats, and form filling without requiring heavy C or Java dependencies.

  _We've reached the peak of developer efficiency where we write Rust wrappers for Python to give an LLM the ability to read a PDF that we could have just opened in a browser._

  `python` `rust` `mcp` `pdf` `rag`
  </details>
- **[velyan/pdf-card-mcp](https://github.com/velyan/pdf-card-mcp)** `⭐ 2` `updated ≤180d` Local-first MCP tool that converts PDFs into polished standalone card-based HTML readers.
- **[jev-information-extraction-fibby-prod-telegram.up.railway.app](https://jev-information-extraction-fibby-prod-telegram.up.railway.app)** jev-information-extraction (site) - Parsing the PDF and extracting the relevant information.
- **[Unstructured Platform](https://unstructured.io)** Unstructured.io is a platform that extracts and structures text from documents such as PDFs, images, and office files for use in AI pipelines. <details><summary>More about</summary>

  It helps developers turn unstructured documents into clean, usable data for LLMs, RAG, and document-aware applications.

  _Yet another preprocessing layer in the endless stack of 'just extract the text' tools that promise to solve your data problems but add another dependency to manage._

  `document-ai` `data-preprocessing` `rag`
  </details>

## File Conversion & Markdown

- **[MarkItDown](https://github.com/microsoft/markitdown)** `⭐ 188k` `updated ≤90d` Python tool for converting files and office documents to Markdown. <details><summary>More about</summary>

  Lets developers feed diverse document formats into LLMs by standardizing them as Markdown.

  _Finally, a way to make your boss's PowerPoint deck palatable to GPT-4o._

  `markdown` `document-processing` `llm-utility`
  </details>
- **[SylphxAI/anymd](https://github.com/sylphxai/anymd)** `⭐ 1k` SylphxAI/anymd : Converts any file (PDF, DOCX, PPTX, XLSX/CSV, EPUB, HTML/URLs, images, audio/video) to clean Markdown for AI agents, locally in Rust with no API key.
- **[Markovo](https://github.com/fisher-byte/markovo)** `⭐ 0` fisher-byte/markovo : Converts PDF, DOCX, PPTX, XLSX and authorized public pages (Google Docs, Notion, GitHub, Hacker News, YouTube) into clean, structured Markdown for agent context — remote Streamable HTTP endpoint with OAuth 2.1 plus local stdio server sandboxed to a dedicated root directory.

## Extraction & Structured Output

- **[abhishekmamdapure/jev-information-extraction](https://github.com/abhishekmamdapure/jev-information-extraction)** `⭐ 2` `updated ≤30d` A tool for parsing PDFs and extracting relevant information using Jev decision models. <details><summary>More about</summary>

  Enables developers to automate structured data extraction from PDFs by leveraging typed decision models for accurate field identification.

  _: Another PDF extractor promising to end manual copy-pasting, because retyping data from scanned invoices was clearly the highlight of sprint planning._

  `pdf` `information-extraction` `jev`
  </details>