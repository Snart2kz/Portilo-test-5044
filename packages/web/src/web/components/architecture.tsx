import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Braces, Database, Layers, Sparkles } from "lucide-react";
import { layers } from "../lib/portfolio";

const icons = [Braces, Layers, Database, Sparkles];
export function Architecture() {
  const [active, setActive] = useState(1);
  return (
    <div className="architecture-panel">
      <div className="diagram-label mono">
        <span className="tiny-square" /> SYSTEM OVERVIEW <span>v.01</span>
      </div>
      <div className="diagram">
        <svg viewBox="0 0 480 450" className="connections" aria-hidden="true">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r=".7" fill="#c8c8ba" />
            </pattern>
          </defs>
          <rect width="480" height="450" fill="url(#dots)" />
          <circle cx="240" cy="230" r="155" className="orbit" />
          <circle cx="240" cy="230" r="105" className="orbit inner" />
          <path
            d="M132 105 L240 230 L363 155 M240 230 L337 358 M240 230 L100 325"
            className="wires"
          />
          <path
            d="M132 105 L240 230 L363 155 M240 230 L337 358 M240 230 L100 325"
            className="signals"
          />
          <text x="244" y="25" className="diagram-text">
            BUILD → CONNECT → EVOLVE
          </text>
          <text x="385" y="410" className="diagram-text">
            01 / 04
          </text>
        </svg>
        <div className="system-core">
          <span>LH</span>
          <i />
        </div>
        {layers.map((layer, i) => {
          const Icon = icons[i]!;
          return (
            <motion.button
              key={layer.id}
              className={`system-node node-${layer.id} ${active === i ? "is-active" : ""}`}
              style={{ left: `${layer.x / 4.8}%`, top: `${layer.y / 4.5}%` }}
              onClick={() => setActive(i)}
              whileHover={{ y: -5 }}
              aria-pressed={active === i}
            >
              <Icon size={19} strokeWidth={1.6} />
              <span>
                {layer.label}
                <small>{layer.code}</small>
              </span>
              <span className="node-light" />
            </motion.button>
          );
        })}
        <span className="diagram-coordinate mono">6°22′ N · 2°25′ E</span>
      </div>
      <div className="diagram-detail" aria-live="polite">
        <span className="mono">0{active + 1}</span>
        <div>
          <strong>{layers[active]!.sub}</strong>
          <p>{layers[active]!.detail}</p>
        </div>
        <ArrowUpRight size={20} />
      </div>
      <span className="diagram-hint mono">CLIQUE SUR UN MODULE POUR EXPLORER</span>
    </div>
  );
}
