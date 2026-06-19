"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

const WEBHOOK_URL = "/api/chat";

export default function ChatWidget() {
  useEffect(() => {
    if (document.querySelector(".chat-window-wrapper")) return;

    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl: WEBHOOK_URL,
        mode: "window",
        showWelcomeScreen: true,
        loadPreviousSession: false,
        initialMessages: [
          "Hi! Welcome to Belo'Coffee ☕",
          "Ask me about our menu, hours, or how to reserve a table—I'm happy to help!",
        ],
        i18n: {
          en: {
            title: "Belo'Coffee",
            subtitle: "Your coffee companion",
            footer: "",
            getStarted: "Start chatting",
            inputPlaceholder: "Ask about our menu, hours…",
            closeButtonTooltip: "Close chat",
          },
        },
      });
    });
  }, []);

  return null;
}
