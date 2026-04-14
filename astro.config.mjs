// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.rearch.engineer",
  base: "/",
  integrations: [
    starlight({
      title: "ReArch Docs",
      editLink: {
        baseUrl: "https://github.com/rearch-engineer/docs/edit/main/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/rearch-engineer/docs",
        },
      ],
      components: {
        Header: "./src/components/CustomHeader.astro",
        Sidebar: "./src/components/CustomSidebar.astro",
      },
      customCss: [
        "./src/styles/layout.css",
        "./src/styles/header.css",
        "./src/styles/learning.css",
        "./src/styles/sidebar.css",
      ],
      sidebar: [
        {
          label: "Get Started",
          items: [
            { label: "Overview", slug: "get-started/overview" },
            { label: "Quick Start", slug: "get-started/quick-start" },
            { label: "Repositories", slug: "get-started/repositories" },
            {
              label: "User Authentication",
              slug: "get-started/user-authentication",
            },
            {
              label: "Resources and Links",
              slug: "get-started/resources-and-links",
            },
          ],
        },
        {
          label: "Concepts",
          items: [
            { label: "What is ReArch?", slug: "concepts/what-is-rearch" },
            { label: "Architecture", slug: "concepts/architecture" },
            {
              label: "Key Concepts & Glossary",
              slug: "concepts/glossary",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Conversations", slug: "guides/conversations" },
            { label: "Resources", slug: "guides/resources" },
            { label: "LLM Providers", slug: "guides/llm-providers" },
            { label: "MCP Servers", slug: "guides/mcp-servers" },
            { label: "Users", slug: "guides/users" },
            { label: "Skills", slug: "guides/skills" },
            { label: "Guardrails", slug: "guides/guardrails" },
            { label: "Docker Images", slug: "guides/docker-images" },
            { label: "Jobs", slug: "guides/jobs" },
            { label: "Usage Analytics", slug: "guides/usage-analytics" },
          ],
        },
        {
          label: "Deploy & Operate",
          items: [
            { label: "Self-Hosting", slug: "deploy/self-hosting" },
            { label: "Keycloak Setup", slug: "deploy/keycloak" },
            {
              label: "Monitoring & Troubleshooting",
              slug: "deploy/monitoring",
            },
            { label: "Upgrading", slug: "deploy/upgrading" },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Configuration",
              slug: "reference/configuration",
            },
          ],
        },
        {
          label: "Learning Hub",
          items: [
            { label: "Learning Hub", slug: "learning" },
            {
              label: "Generative AI Fundamentals",
              items: [
                {
                  label: "Course Overview",
                  slug: "learning/generative-ai-fundamentals",
                },
                {
                  label: "1. What is Generative AI?",
                  slug: "learning/generative-ai-fundamentals/01-what-is-generative-ai",
                },
                {
                  label: "2. What is a Token?",
                  slug: "learning/generative-ai-fundamentals/02-tokens",
                },
                {
                  label: "3. Predict the Next Token",
                  slug: "learning/generative-ai-fundamentals/03-next-token-prediction",
                },
                {
                  label: "4. Families of Models",
                  slug: "learning/generative-ai-fundamentals/04-model-families",
                },
                {
                  label: "5. Context Windows & Limits",
                  slug: "learning/generative-ai-fundamentals/05-context-windows",
                },
              ],
            },
            {
              label: "ReArch Basics",
              items: [
                {
                  label: "Course Overview",
                  slug: "learning/getting-started-with-rearch",
                },
                {
                  label: "1. What is ReArch?",
                  slug: "learning/getting-started-with-rearch/01-what-is-rearch",
                },
                {
                  label: "2. Setting Up Your Workspace",
                  slug: "learning/getting-started-with-rearch/02-setting-up-your-workspace",
                },
                {
                  label: "3. Your First AI Task",
                  slug: "learning/getting-started-with-rearch/03-your-first-ai-task",
                },
                {
                  label: "4. Best Practices",
                  slug: "learning/getting-started-with-rearch/04-best-practices",
                },
              ],
            },
            {
              label: "ReArch Advanced",
              items: [
                {
                  label: "Course Overview",
                  slug: "learning/rearch-advanced",
                },
              ],
            },
            {
              label: "AI Development",
              items: [
                {
                  label: "Course Overview",
                  slug: "learning/ai-development",
                },
              ],
            },
            {
              label: "Advanced AI Workflows",
              items: [
                {
                  label: "Course Overview",
                  slug: "learning/advanced-ai-workflows",
                },
                {
                  label: "1. Custom Agent Prompts",
                  slug: "learning/advanced-ai-workflows/01-custom-agent-prompts",
                },
                {
                  label: "2. Multi-Repo Workflows",
                  slug: "learning/advanced-ai-workflows/02-multi-repo-workflows",
                },
                {
                  label: "3. CI/CD Integration",
                  slug: "learning/advanced-ai-workflows/03-ci-cd-integration",
                },
              ],
            },
            {
              label: "Team Collaboration",
              items: [
                {
                  label: "Course Overview",
                  slug: "learning/team-collaboration",
                },
                {
                  label: "1. Team Setup & Roles",
                  slug: "learning/team-collaboration/01-team-setup-and-roles",
                },
                {
                  label: "2. Code Review with AI",
                  slug: "learning/team-collaboration/02-code-review-with-ai",
                },
                {
                  label: "3. Metrics & Reporting",
                  slug: "learning/team-collaboration/03-metrics-and-reporting",
                },
              ],
            },
          ],
        },
        {
          label: "Releases",
          items: [{ label: "Changelog", slug: "releases/changelog" }],
        },
        {
          label: "Licensing",
          items: [
            {
              label: "Licensing",
              link: "https://rearch.engineer/legal/licencia",
              attrs: { target: "_self" },
            },
          ],
        },
      ],
    }),
    react(),
  ],
});
