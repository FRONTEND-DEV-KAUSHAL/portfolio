import { useDice } from '../hooks/useDice';
export default function InteractiveLab({ playChime, soundStatus }) {
  const { value, feedback, rolling, roll } = useDice();
  function onDiceKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      roll();
    }
  }
  return (
    <section className="w-full flex flex-col scroll-mt-24" id="interactive-lab">
      <div className="inline-flex items-center gap-2 bg-pure-white border-[3px] border-b-0 border-stroke-obsidian px-4 py-2 rounded-t-xl self-start z-10 -mb-[3px] shadow-[4px_0px_0px_#0B0F19]">
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-stroke-obsidian text-[22px]"
        >
          smart_toy
        </span>
        <span className="font-headline-sm text-lg sm:text-headline-sm text-stroke-obsidian uppercase font-extrabold">
          Interactive Lab
        </span>
      </div>
      <div className="w-full bg-pure-white border-[3px] sm:border-[4px] border-stroke-obsidian rounded-b-xl rounded-tr-xl p-4 sm:p-8 md:p-10 shadow-[6px_6px_0px_#0B0F19] sm:shadow-[8px_8px_0px_#0B0F19]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <div className="bg-canvas-cream border-[3px] border-stroke-obsidian rounded-xl p-4 sm:p-6 shadow-[5px_5px_0px_#0B0F19] flex flex-col items-center justify-between text-center hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] transition-all">
            <span className="font-label-code text-xs sm:text-label-code uppercase tracking-wider text-stroke-obsidian font-bold">
              // RPG STAT CHECKER
            </span>
            <div className="my-4 sm:my-6 flex flex-col items-center">
              <div
                className="w-24 h-24 sm:w-28 sm:h-28 bg-surface-lime border-[4px] border-stroke-obsidian rounded-2xl flex items-center justify-center font-display-hero text-4xl sm:text-5xl text-stroke-obsidian shadow-[5px_5px_0px_#0B0F19] select-none transition-transform duration-200 cursor-pointer"
                id="dice-display"
                onClick={roll}
                onKeyDown={onDiceKeyDown}
                tabIndex={0}
                role="button"
                aria-label="Roll a twenty-sided die"
                aria-disabled={rolling}
              >
                {value}
              </div>
              <p
                className="font-label-code text-xs sm:text-label-code text-stroke-obsidian font-bold mt-4 h-6 text-center"
                id="dice-feedback"
                role="status"
              >
                {feedback}
              </p>
            </div>
            <button
              className="w-full sm:w-auto bg-surface-violet text-pure-white border-[3px] border-stroke-obsidian px-6 py-2.5 rounded-lg font-headline-sm text-sm sm:text-body-md shadow-[4px_4px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] transition-all cursor-pointer font-bold select-none"
              id="roll-dice-btn"
              onClick={roll}
              disabled={rolling}
            >
              ROLL D20 INITIATIVE 🎲
            </button>
          </div>

          <div className="bg-canvas-cream border-[3px] border-stroke-obsidian rounded-xl p-4 sm:p-6 shadow-[5px_5px_0px_#0B0F19] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0B0F19] transition-all">
            <div>
              <div className="flex items-center justify-between border-b-[2px] border-stroke-obsidian pb-2 mb-4">
                <span className="font-label-code text-xs sm:text-label-code uppercase tracking-wider text-stroke-obsidian font-bold">
                  // 8-BIT TACTILE KEYPAD
                </span>
                <span
                  className="font-label-code text-[11px] sm:text-xs bg-surface-lime text-stroke-obsidian px-2 py-0.5 rounded border border-stroke-obsidian font-bold"
                  id="sound-status"
                  role="status"
                >
                  {soundStatus}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  className="p-3 sm:p-4 bg-surface-violet text-pure-white border-[3px] border-stroke-obsidian rounded-lg font-label-badge text-xs sm:text-label-badge shadow-[3px_3px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] flex flex-col items-center gap-1 cursor-pointer font-bold transition-all"
                  onClick={() => playChime(220, 'Distortion Bass')}
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[24px]"
                  >
                    graphic_eq
                  </span>
                  <span>HEAVY RIFF</span>
                </button>
                <button
                  className="p-3 sm:p-4 bg-surface-lime text-stroke-obsidian border-[3px] border-stroke-obsidian rounded-lg font-label-badge text-xs sm:text-label-badge shadow-[3px_3px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] flex flex-col items-center gap-1 cursor-pointer font-bold transition-all"
                  onClick={() => playChime(440, 'Loot Unlocked')}
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[24px]"
                  >
                    redeem
                  </span>
                  <span>LOOT DROP</span>
                </button>
                <button
                  className="p-3 sm:p-4 bg-surface-cyan text-stroke-obsidian border-[3px] border-stroke-obsidian rounded-lg font-label-badge text-xs sm:text-label-badge shadow-[3px_3px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] flex flex-col items-center gap-1 cursor-pointer font-bold transition-all"
                  onClick={() => playChime(660, 'Pixel Jump')}
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[24px]"
                  >
                    arrow_upward
                  </span>
                  <span>RETRO JUMP</span>
                </button>
                <button
                  className="p-3 sm:p-4 bg-surface-coral-dark text-pure-white border-[3px] border-stroke-obsidian rounded-lg font-label-badge text-xs sm:text-label-badge shadow-[3px_3px_0px_#0B0F19] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#0B0F19] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#0B0F19] flex flex-col items-center gap-1 cursor-pointer font-bold transition-all"
                  onClick={() => playChime(880, 'Quest Complete')}
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-[24px]"
                  >
                    military_tech
                  </span>
                  <span>QUEST COMPLETE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
