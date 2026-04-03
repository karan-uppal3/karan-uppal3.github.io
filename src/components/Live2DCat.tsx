import { useEffect } from "react";

declare global {
  interface Window {
    L2Dwidget: {
      init: (config: Record<string, unknown>) => void;
    };
  }
}

const Live2DCat = () => {
  useEffect(() => {
    // Avoid loading twice
    if (document.getElementById("live2d-widget-script")) return;

    const script = document.createElement("script");
    script.id = "live2d-widget-script";
    script.src =
      "https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js";
    script.async = true;
    script.onload = () => {
      window.L2Dwidget.init({
        pluginRootPath: "live2dw/",
        pluginJsPath: "lib/",
        pluginModelPath: "assets/",
        tagMode: false,
        debug: false,
        model: {
          jsonPath:
            "https://cdn.jsdelivr.net/npm/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json",
        },
        display: {
          position: "right",
          width: 200,
          height: 400,
        },
        mobile: {
          show: true,
        },
        log: false,
      });
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const el = document.getElementById("live2d-widget");
      if (el) el.remove();
      const scriptEl = document.getElementById("live2d-widget-script");
      if (scriptEl) scriptEl.remove();
    };
  }, []);

  return null;
};

export default Live2DCat;
