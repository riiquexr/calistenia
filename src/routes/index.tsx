import { createFileRoute } from "@tanstack/react-router";
import { useState, useLayoutEffect, useMemo, useRef, type PointerEvent, type KeyboardEvent, type ReactNode } from "react";
import {
  Scale,
  Dumbbell,
  UserCheck,
  Zap,
  BatteryCharging,
  Moon,
  Brain,
  Move,
  Sparkles,
  Info,
} from "lucide-react";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { OptionCard } from "@/components/quiz/OptionCard";
import { PrimaryButton } from "@/components/quiz/PrimaryButton";
import { cn } from "@/lib/utils";
import womanHero from "@/assets/woman-hero.png";
import womanExercise from "@/assets/woman-calisthenics.webp";
import womanSofa from "@/assets/woman-sofa.jpg";
import womanOk from "@/assets/woman-ok.jpg";
import womanBestshape from "@/assets/woman-fitness-abs.webp";

import groupWomen from "@/assets/group-women.jpg";
import thumbChin from "@/assets/thumb-chin.jpg";
import thumbArms from "@/assets/thumb-arms.jpg";
import thumbChest from "@/assets/thumb-chest.jpg";
import thumbBelly from "@/assets/thumb-belly.jpg";
import thumbKnees from "@/assets/thumb-knees.jpg";
import thumbSaddlebags from "@/assets/thumb-saddlebags.jpg";
import thumbGlutes from "@/assets/thumb-glutes.jpg";
import thumbThighs from "@/assets/thumb-thighs.jpg";
import thumbAbs from "@/assets/thumb-abs.jpg";
import thumbButt from "@/assets/thumb-butt.jpg";
import thumbLegs from "@/assets/thumb-legs.jpg";
import thumbBack from "@/assets/thumb-back.jpg";
import thumbBiceps from "@/assets/thumb-biceps.jpg";
import thumbPecs from "@/assets/thumb-pecs.jpg";
import bodySlim from "@/assets/body-slim.jpg";
import bodySkinnyfat from "@/assets/body-skinnyfat.jpg";
import bodyOverweight from "@/assets/body-overweight.jpg";
import bodyPlus from "@/assets/body-plus.jpg";
import painBack from "@/assets/thumb-pain-back.jpg";
import painKnee from "@/assets/thumb-pain-knee.jpg";
import painHip from "@/assets/thumb-pain-hip.jpg";
import painShoulder from "@/assets/thumb-pain-shoulder.jpg";
import painCalf from "@/assets/thumb-pain-calf.jpg";
import daySedentary from "@/assets/day-sedentary.jpg";
import dayModerate from "@/assets/day-moderate.jpg";
import dayActive from "@/assets/day-active.jpg";
import womanWater from "@/assets/woman-water.jpg";
import womanSleep from "@/assets/woman-sleep.jpg";
import mealVegetarian from "@/assets/meal-vegetarian.jpg";
import mealVegan from "@/assets/meal-vegan.jpg";
import mealGlutenfree from "@/assets/meal-glutenfree.jpg";
import mealLactosefree from "@/assets/meal-lactosefree.jpg";
import mealNorestrictions from "@/assets/meal-norestrictions.jpg";
import womanRecover from "@/assets/woman-recover.jpg";
import { Heart, Calendar, Briefcase, Pill, X, Shirt, Baby, MoreHorizontal, Rocket, Activity, User, Flame, Target, CalendarDays, ShieldCheck, ChevronRight, Check, ChevronDown, Lock } from "lucide-react";
import transformation1 from "@/assets/transformation-1.webp";
import transformation2 from "@/assets/transformation-2.webp";
import transformation3 from "@/assets/transformation-3.webp";
import appMockup from "@/assets/app-mockup.webp";
import beatrizImg from "@/assets/beatriz.webp";
import carlaImg from "@/assets/carla.webp";
import fernandaImg from "@/assets/fernanda.webp";
import julianaImg from "@/assets/juliana.webp";
import garantiaImg from "@/assets/garantia-30-dias.webp";
import { useEffect } from "react";


export const Route = createFileRoute("/")({
  component: QuizPage,
});

const TOTAL_STEPS = 35;


function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [expectations, setExpectations] = useState<string[]>([]);
  const [concerns, setConcerns] = useState<string[]>([]);
  const [wholeBody, setWholeBody] = useState(false);
  const [targets, setTargets] = useState<string[]>([]);
  const [difficulties, setDifficulties] = useState<string[]>([]);
  const [mealPrefs, setMealPrefs] = useState<string[]>([]);
  const [habits, setHabits] = useState<string[]>([]);
  const [weightEvents, setWeightEvents] = useState<string[]>([]);
  const [heightCm, setHeightCm] = useState(165);
  const [weightKg, setWeightKg] = useState(73);
  const [targetKg, setTargetKg] = useState(57);
  const [age, setAge] = useState("");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const set = (key: string, value: unknown) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    next();
  };
  const toggle = (arr: string[], setArr: (v: string[]) => void, value: string) => {
    setArr(arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value]);
  };
  const toggleWithNone = (
    arr: string[],
    setArr: (v: string[]) => void,
    value: string,
    noneLabel: string,
  ) => {
    if (value === noneLabel) {
      setArr(arr.includes(value) ? [] : [value]);
    } else {
      setArr(
        arr.includes(value)
          ? arr.filter((x) => x !== value)
          : [...arr.filter((x) => x !== noneLabel), value],
      );
    }
  };

  const progress = step === 0 ? undefined : ((step + 1) / TOTAL_STEPS) * 100;

  return (
    <QuizLayout progress={progress} onBack={back} showBack={step > 0}>
      {step === 0 && <StepAge onPick={(v) => set("ageRange", v)} />}
      {step === 1 && <StepSocialProof onNext={next} />}
      {step === 2 && <StepTried onPick={(v) => set("tried", v)} />}
      {step === 3 && <StepDifferent onNext={next} />}
      {step === 4 && <StepGoal onPick={(v) => set("goal", v)} />}
      {step === 5 && (
        <StepExpectations
          selected={expectations}
          onToggle={(v) => toggle(expectations, setExpectations, v)}
          onNext={next}
        />
      )}
      {step === 6 && (
        <StepConcerns
          selected={concerns}
          onToggle={(v) => toggle(concerns, setConcerns, v)}
          wholeBody={wholeBody}
          onToggleWhole={() => setWholeBody((v) => !v)}
          onNext={next}
        />
      )}
      {step === 7 && (
        <StepTargets
          selected={targets}
          onToggle={(v) => toggle(targets, setTargets, v)}
          onNext={next}
        />
      )}
      {step === 8 && <StepPromise onNext={next} />}
      {step === 9 && <StepBodyNow onPick={(v) => set("bodyNow", v)} />}
      {step === 10 && <StepDreamBody onPick={(v) => set("dreamBody", v)} />}
      {step === 11 && <StepBestShape onPick={(v) => set("bestShape", v)} />}
      {step === 12 && (
        <StepDifficulties
          selected={difficulties}
          onToggle={(v) => toggleWithNone(difficulties, setDifficulties, v, "Nenhuma das opções acima")}
          onNext={next}
        />
      )}
      {step === 13 && <StepComfort onPick={(v) => set("comfort", v)} />}
      {step === 14 && <StepCare onNext={next} />}
      {step === 15 && (
        <StepHeight value={heightCm} onChange={setHeightCm} onNext={next} />
      )}
      {step === 16 && (
        <StepWeight
          value={weightKg}
          onChange={setWeightKg}
          heightCm={heightCm}
          onNext={next}
        />
      )}
      {step === 17 && (
        <StepTargetWeight value={targetKg} onChange={setTargetKg} onNext={next} />
      )}
      {step === 18 && <StepAgeInput value={age} onChange={setAge} onNext={() => { setAnswers(a => ({ ...a, age })); next(); }} />}
      {step === 19 && <StepTypicalDay onPick={(v) => set("typicalDay", v)} />}
      {step === 20 && <StepEnergy onPick={(v) => set("energy", v)} />}
      {step === 21 && <StepWater onPick={(v) => set("water", v)} />}
      {step === 22 && <StepSleep onPick={(v) => set("sleep", v)} />}
      {step === 23 && (
        <StepMealPrefs
          selected={mealPrefs}
          onToggle={(v) => toggle(mealPrefs, setMealPrefs, v)}
          onNext={next}
        />
      )}
      {step === 24 && (
        <StepHabits
          selected={habits}
          onToggle={(v) => toggle(habits, setHabits, v)}
          onNext={next}
        />
      )}
      {step === 25 && (
        <StepWeightEvents
          selected={weightEvents}
          onToggle={(v) => toggleWithNone(weightEvents, setWeightEvents, v, "Nenhuma das acima")}
          onNext={next}
        />
      )}
      {step === 26 && <StepRecover onNext={next} />}
      {step === 27 && <StepTransformLife onNext={next} />}
      {step === 28 && <StepBuildingPlan onDone={next} />}
      {step === 29 && (
        <StepWeightProjection
          weightKg={weightKg}
          targetKg={targetKg}
          onNext={next}
        />
      )}
      {step === 30 && (
        <StepProfileReady heightCm={heightCm} weightKg={weightKg} onNext={next} />
      )}
      {step === 31 && <StepMainMotivation onPick={(v) => set("mainMotivation", v)} />}
      {step === 32 && <StepConfidence onPick={(v) => set("confidence", v)} />}
      {step === 33 && (
        <StepPlanReady
          weightKg={weightKg}
          targetKg={targetKg}
          onNext={next}
        />
      )}
      {step === 34 && (
        <StepFinal
          answers={{
            ...answers,
            expectations,
            concerns,
            wholeBody,
            targets,
            difficulties,
            mealPrefs,
            habits,
            weightEvents,
            heightCm,
            weightKg,
            targetKg,
            age,
          }}
        />
      )}
    </QuizLayout>
  );
}

/* ---------------- Steps ---------------- */

/* ---------------- Steps ---------------- */

function StepAge({ onPick }: { onPick: (v: string) => void }) {
  const ages = ["39 – 45", "46 – 50", "51 – 60", "60+"];
  return (
    <div className="relative max-w-6xl mx-auto w-full px-6 pt-8 pb-16 flex-1 flex flex-col md:flex-row items-center md:items-end gap-8 min-h-[640px] md:min-h-0">
      <img
        src={womanHero}
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-0 w-[65%] max-w-[300px] h-auto object-contain pointer-events-none z-0 md:hidden"
      />
      <div className="flex-1 w-full max-w-xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-black leading-[1.05] text-foreground">
          Programa de Calistenia Asiática{" "}
          <span className="text-primary">para Mulheres</span>
        </h1>
        <p className="mt-6 text-center md:text-left text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Teste de 1 minuto
        </p>
        <h2 className="mt-10 text-xl font-bold text-center md:text-left text-foreground">
          Quantos anos você tem?
        </h2>
        <div className="mt-6 space-y-3 w-full max-w-[60%] md:max-w-none">
          {ages.map((a) => (
            <OptionCard key={a} label={a} onClick={() => onPick(a)} showArrow />
          ))}
        </div>
      </div>
      <div className="hidden md:block w-[320px] flex-shrink-0">
        <img
          src={womanHero}
          alt="Mulher fit"
          width={320}
          height={440}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}


function StepSocialProof({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-lg mx-auto w-full px-6 py-10 text-center">
      <img
        src={groupWomen}
        alt="Grupo de mulheres"
        loading="lazy"
        className="rounded-3xl w-full object-cover aspect-[4/3]"
      />
      <h2 className="mt-8 text-3xl font-extrabold text-foreground">
        Elas conseguiram e você também pode
      </h2>
      <p className="mt-4 text-muted-foreground">
        Mais de 27 milhões de mulheres já transformaram suas vidas com a
        Calistenia Asiática
      </p>
      <div className="mt-8">
        <PrimaryButton onClick={onNext}>Continuar</PrimaryButton>
      </div>
    </div>
  );
}

function StepTried({ onPick }: { onPick: (v: string) => void }) {
  return (
    <div className="relative max-w-6xl mx-auto w-full px-6 pt-8 pb-16 flex-1 flex flex-col md:flex-row items-center md:items-end gap-8 min-h-[640px] md:min-h-0">
      <img
        src={womanExercise}
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-0 w-[80%] max-w-[320px] h-auto object-contain pointer-events-none z-0 md:hidden"
      />
      <div className="flex-1 w-full max-w-xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-black leading-tight text-center md:text-left text-foreground">
          Você já experimentou exercícios de{" "}
          <span className="text-primary">calistenia</span>?
        </h2>
        <div className="mt-10 space-y-3 w-full max-w-[60%] md:max-w-md">
          <OptionCard label="Sim" onClick={() => onPick("sim")} showArrow />
          <OptionCard label="Não" onClick={() => onPick("nao")} showArrow />
        </div>
      </div>
      <div className="hidden md:block w-[340px] flex-shrink-0">
        <img
          src={womanExercise}
          alt="Exercise"
          width={340}
          height={480}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}



function StepDifferent({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-6xl mx-auto w-full px-6 py-10 flex-1 flex flex-col">
      <div className="grid md:grid-cols-2 gap-10 items-center flex-1">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-foreground">
            Você já tem a base, mas a Calistenia Asiática é diferente da
            calistenia comum.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Enquanto o método tradicional foca apenas em força externa, nossa
            técnica ativa as <strong className="text-foreground">fibras profundas</strong>,
            agindo na musculatura interna, onde eliminamos a{" "}
            <strong className="text-foreground">gordura mais difícil de queimar</strong> e
            destravamos o seu metabolismo de forma definitiva.
          </p>
        </div>
        <img
          src={womanSofa}
          alt=""
          loading="lazy"
          className="rounded-3xl w-full object-cover aspect-square"
        />
      </div>
      <div className="mt-8 max-w-lg mx-auto w-full">
        <PrimaryButton onClick={onNext}>Continuar</PrimaryButton>
      </div>
    </div>
  );
}

function StepGoal({ onPick }: { onPick: (v: string) => void }) {
  const goals = [
    { label: "Perder peso", icon: <Scale size={18} /> },
    { label: "Desenvolver músculos", icon: <Dumbbell size={18} /> },
    { label: "Manter o peso e ficar em forma", icon: <UserCheck size={18} /> },
    { label: "Melhorar a aptidão física", icon: <Zap size={18} /> },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Qual é seu <span className="text-primary">principal objetivo</span>?
      </h2>
      <div className="mt-8 space-y-3">
        {goals.map((g) => (
          <OptionCard
            key={g.label}
            label={g.label}
            icon={g.icon}
            onClick={() => onPick(g.label)}
          />
        ))}
      </div>
    </div>
  );
}

function StepExpectations({
  selected,
  onToggle,
  onNext,
}: {
  selected: string[];
  onToggle: (v: string) => void;
  onNext: () => void;
}) {
  const items = [
    { label: "Aumentar a energia", icon: <BatteryCharging size={18} /> },
    { label: "Melhorar o sono", icon: <Moon size={18} /> },
    { label: "Reduzir o estresse", icon: <Brain size={18} /> },
    { label: "Melhorar a postura e a mobilidade", icon: <Move size={18} /> },
    { label: "Desenvolver flexibilidade", icon: <Sparkles size={18} /> },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        O que mais você espera alcançar com este plano?
      </h2>
      <p className="mt-2 text-center text-muted-foreground text-sm">
        Pode escolher várias opções
      </p>
      <div className="mt-8 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            icon={i.icon}
            showRadio
            selected={selected.includes(i.label)}
            onClick={() => onToggle(i.label)}
          />
        ))}
      </div>
      <div className="mt-8">
        <PrimaryButton onClick={onNext} disabled={selected.length === 0}>
          Continuar
        </PrimaryButton>
      </div>
    </div>
  );
}

function StepConcerns({
  selected,
  onToggle,
  wholeBody,
  onToggleWhole,
  onNext,
}: {
  selected: string[];
  onToggle: (v: string) => void;
  wholeBody: boolean;
  onToggleWhole: () => void;
  onNext: () => void;
}) {
  const items = [
    { label: "Queixo duplo", thumb: thumbChin },
    { label: "Braços flácidos", thumb: thumbArms },
    { label: "Seios caídos", thumb: thumbChest },
    { label: "Gordura da barriga", thumb: thumbBelly },
    { label: "Gordura nos joelhos", thumb: thumbKnees },
    { label: "Traseiro de alforje", thumb: thumbSaddlebags },
    { label: "Nádegas flácidas", thumb: thumbGlutes },
    { label: "Parte interna da coxa", thumb: thumbThighs },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Quais são as zonas que mais a preocupam?
      </h2>
      <p className="mt-2 text-center text-muted-foreground text-sm">
        Por favor, selecione todas as opções aplicáveis
      </p>
      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={onToggleWhole}
          className={`relative w-12 h-7 rounded-full transition ${
            wholeBody ? "bg-primary" : "bg-border"
          }`}
          aria-pressed={wholeBody}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition ${
              wholeBody ? "translate-x-5" : ""
            }`}
          />
        </button>
        <span className="font-semibold text-foreground">Melhorar o corpo inteiro</span>
      </div>
      <div className="mt-6 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            thumb={i.thumb}
            showRadio
            selected={wholeBody || selected.includes(i.label)}
            onClick={() => !wholeBody && onToggle(i.label)}
          />
        ))}
      </div>
      <div className="mt-8">
        <PrimaryButton
          onClick={onNext}
          disabled={!wholeBody && selected.length === 0}
        >
          Próximo passo
        </PrimaryButton>
      </div>
    </div>
  );
}

function StepTargets({
  selected,
  onToggle,
  onNext,
}: {
  selected: string[];
  onToggle: (v: string) => void;
  onNext: () => void;
}) {
  const items = [
    { label: "Barriga", thumb: thumbAbs },
    { label: "Bunda", thumb: thumbButt },
    { label: "Pernas", thumb: thumbLegs },
    { label: "Peito", thumb: thumbPecs },
    { label: "Braços", thumb: thumbBiceps },
    { label: "Costas", thumb: thumbBack },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Quais são as suas zonas alvo?
      </h2>
      <p className="mt-2 text-center text-muted-foreground text-sm">
        Escolha todas as opções aplicáveis
      </p>
      <div className="mt-8 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            thumb={i.thumb}
            showRadio
            selected={selected.includes(i.label)}
            onClick={() => onToggle(i.label)}
          />
        ))}
      </div>
      <div className="mt-8">
        <PrimaryButton onClick={onNext} disabled={selected.length === 0}>
          Próximo passo
        </PrimaryButton>
      </div>
    </div>
  );
}

function StepPromise({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-lg mx-auto w-full px-6 py-10 text-center">
      <img
        src={womanOk}
        alt=""
        loading="lazy"
        className="rounded-3xl w-full object-cover aspect-square max-w-sm mx-auto"
      />
      <h2 className="mt-8 text-2xl font-extrabold text-foreground leading-snug">
        Apenas 7 minutos por dia — transformarão seu corpo e{" "}
        <span className="text-primary">destravarão o seu metabolismo</span> sem o
        esforço exaustivo da academia!
      </h2>
      <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
        O Protocolo de Calistenia Asiática utiliza ativações de fibras profundas
        para derreter a gordura acumulada e chapar a barriga, agindo onde os
        exercícios comuns de academia não conseguem chegar, de forma simples e
        definitiva...
      </p>
      <div className="mt-8">
        <PrimaryButton onClick={onNext}>Continuar</PrimaryButton>
      </div>
    </div>
  );
}

/* --------- New Steps --------- */

function StepBodyNow({ onPick }: { onPick: (v: string) => void }) {
  const items = [
    { label: "Magra", img: bodySlim },
    { label: "Falsa Magra", img: bodySkinnyfat },
    { label: "Acima do peso", img: bodyOverweight },
    { label: "Sobrepeso", img: bodyPlus },
  ];
  return (
    <div className="max-w-5xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Como você descreveria o seu corpo atualmente?
      </h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((i) => (
          <button
            key={i.label}
            onClick={() => onPick(i.label)}
            className="bg-card rounded-3xl p-3 shadow-[0_2px_10px_-4px_oklch(0_0_0/0.08)] hover:shadow-[0_8px_24px_-8px_oklch(0_0_0/0.15)] transition-all hover:-translate-y-0.5 group"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-secondary/40">
              <img
                src={i.img}
                alt={i.label}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 mb-2 font-semibold text-foreground text-sm">{i.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepDreamBody({ onPick }: { onPick: (v: string) => void }) {
  const items = [
    { label: "Curvado", thumb: bodyOverweight },
    { label: "Magro", thumb: bodySlim },
    { label: "Em forma", thumb: bodySkinnyfat },
    { label: "Tonificado", thumb: thumbAbs },
    { label: "Estou bem com meu corpo", thumb: bodyPlus },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Qual é o corpo dos seus sonhos?
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            thumb={i.thumb}
            onClick={() => onPick(i.label)}
          />
        ))}
      </div>
    </div>
  );
}

function StepBestShape({ onPick }: { onPick: (v: string) => void }) {
  const options = ["1 a 2 anos atrás", "3 a 5 anos atrás", "Mais de 5 anos atrás", "Nunca"];
  return (
    <div className="relative max-w-6xl mx-auto w-full px-6 pt-8 pb-16 flex-1 flex flex-col md:flex-row items-center md:items-end gap-8 min-h-[640px] md:min-h-0 overflow-hidden">
      <img
        src={womanBestshape}
        alt=""
        aria-hidden="true"
        className="absolute right-[-40px] top-16 h-[78%] max-h-[560px] w-auto object-contain pointer-events-none z-0 md:hidden"
      />
      <div className="flex-1 w-full max-w-xl relative z-10">
        <h2 className="text-2xl md:text-4xl font-black leading-tight text-center md:text-left text-foreground">
          Há quanto tempo você estava na{" "}
          <span className="text-primary">melhor forma</span> da sua vida?
        </h2>
        <div className="mt-8 space-y-3 w-full max-w-[58%] md:max-w-md">
          {options.map((o) => (
            <OptionCard key={o} label={o} onClick={() => onPick(o)} showArrow />
          ))}
        </div>
      </div>
      <div className="hidden md:block w-[420px] flex-shrink-0">
        <img
          src={womanBestshape}
          alt="Best shape"
          width={420}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}


function StepDifficulties({
  selected,
  onToggle,
  onNext,
}: {
  selected: string[];
  onToggle: (v: string) => void;
  onNext: () => void;
}) {
  const items = [
    { label: "Costas sensíveis", thumb: painBack },
    { label: "Joelhos sensíveis", thumb: painKnee },
    { label: "Quadril sensível", thumb: painHip },
    { label: "Ombros e braços", thumb: painShoulder },
    { label: "Panturrilhas e tornozelos", thumb: painCalf },
    { label: "Nenhuma das opções acima" },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Você tem dificuldades com algum
        <br />
        dos seguintes itens?
      </h2>
      <p className="mt-2 text-center text-muted-foreground text-sm">
        Por favor, selecione todas as opções aplicáveis
      </p>
      <div className="mt-8 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            thumb={i.thumb}
            showRadio
            selected={selected.includes(i.label)}
            onClick={() => onToggle(i.label)}
          />
        ))}
      </div>
      <div className="mt-8">
        <PrimaryButton onClick={onNext} disabled={selected.length === 0}>
          Próximo passo
        </PrimaryButton>
      </div>
    </div>
  );
}

function StepComfort({ onPick }: { onPick: (v: string) => void }) {
  const items = [
    { label: "Sinto dor/Desconforto", emoji: "😔" },
    { label: "Sinto alguma dificuldade", emoji: "😐" },
    { label: "Sinto-me confortável", emoji: "😊" },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Você se sente confortável ao se
        <br />
        exercitar?
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            icon={<span className="text-2xl leading-none">{i.emoji}</span>}
            onClick={() => onPick(i.label)}
          />
        ))}
      </div>
    </div>
  );
}

function StepCare({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-lg mx-auto w-full px-6 py-10 text-center">
      <img
        src={womanOk}
        alt=""
        loading="lazy"
        className="rounded-3xl w-full object-cover aspect-square max-w-sm mx-auto"
      />
      <h2 className="mt-8 text-2xl font-extrabold text-foreground">
        Nós cuidamos de você!
      </h2>
      <p className="mt-4 text-muted-foreground">
        A dor não vai te impedir. Adaptaremos seu programa para promover
        movimentos seguros e suaves.
      </p>
      <div className="mt-8">
        <PrimaryButton onClick={onNext}>Continuar</PrimaryButton>
      </div>
    </div>
  );
}

/* --------- Slider helpers --------- */

function UnitToggle({
  unit,
  options,
  onChange,
}: {
  unit: string;
  options: string[];
  onChange: (u: string) => void;
}) {
  return (
    <div className="inline-flex bg-secondary rounded-full p-1">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={cn(
            "px-5 py-1.5 rounded-full text-sm font-semibold transition",
            unit === o
              ? "bg-primary text-white shadow"
              : "text-muted-foreground",
          )}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function RulerSlider({
  value,
  min,
  max,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  const TICK_PX = 10;
  const dragRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef<{ startX: number; startValue: number } | null>(null);

  const ticks = useMemo(() => {
    const arr: number[] = [];
    for (let i = min; i <= max; i++) arr.push(i);
    return arr;
  }, [min, max]);

  const offset = (min - value) * TICK_PX;
  const clamp = (nextValue: number) => Math.min(max, Math.max(min, nextValue));

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = { startX: event.clientX, startValue: value };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.buttons !== 1 || !dragState.current) return;
    const deltaX = event.clientX - dragState.current.startX;
    const nextValue = clamp(Math.round(dragState.current.startValue - (deltaX / TICK_PX)));
    onChange(nextValue);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
    dragState.current = null;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      onChange(clamp(value + 1));
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      onChange(clamp(value - 1));
    }
  };

  return (
    <div className="relative mt-6 select-none">
      <div className="relative h-24 overflow-hidden">
        <div className="absolute left-0 right-0 top-0 h-px bg-border" />
        {/* Moving ruler strip */}
        <div
          className="absolute top-0 left-1/2 flex items-start"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {ticks.map((t) => {
            const isMajor = t % 10 === 0;
            const isMid = t % 5 === 0;
            return (
              <div
                key={t}
                style={{ width: TICK_PX }}
                className="flex flex-col items-center flex-shrink-0 relative"
              >
                <div
                  className={cn(
                    "w-px bg-border",
                    isMajor ? "h-7" : isMid ? "h-5" : "h-3",
                  )}
                />
                {isMajor && (
                  <span className="absolute top-9 text-[11px] font-medium text-muted-foreground/85">
                    {t}
                  </span>
                )}
              </div>
            );
          })}
        </div>
        {/* Center indicator */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-px h-16 bg-primary z-10" />
          <div className="mt-auto w-0 h-0 border-l-[7px] border-r-[7px] border-b-[9px] border-l-transparent border-r-transparent border-b-primary" />
        </div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-border" />
        <div
          ref={dragRef}
          role="slider"
          tabIndex={0}
          aria-label="ajustar valor"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 cursor-ew-resize outline-none touch-none"
        />
      </div>
      <p className="mt-1 text-center text-xs text-muted-foreground/70">
        Arraste para ajustar
      </p>
    </div>
  );
}


function StepHeight({
  value,
  onChange,
  onNext,
}: {
  value: number;
  onChange: (v: number) => void;
  onNext: () => void;
}) {
  const [unit, setUnit] = useState("cm");
  const display =
    unit === "cm"
      ? value
      : Math.round(value / 2.54);
  return (
    <div className="max-w-md mx-auto w-full px-6 py-10 text-center">
      <h2 className="text-2xl font-extrabold text-foreground">
        Qual é a sua altura?
      </h2>
      <div className="mt-5 flex justify-center">
        <UnitToggle unit={unit} options={["cm", "pol"]} onChange={setUnit} />
      </div>
      <div className="mt-6">
        <span className="text-6xl font-black text-foreground">{display}</span>
        <span className="text-xl text-muted-foreground ml-1">{unit}</span>
      </div>
      <RulerSlider value={value} min={140} max={200} onChange={onChange} />
      <div className="mt-6 bg-card rounded-xl p-3 flex items-center gap-3 text-left">
        <span className="w-6 h-6 rounded-full bg-primary-soft text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
          i
        </span>
        <span className="text-sm text-muted-foreground">Calculando seu IMC</span>
      </div>
      <div className="mt-6">
        <PrimaryButton onClick={onNext}>Próximo passo</PrimaryButton>
      </div>
    </div>
  );
}

function bmiCategory(bmi: number) {
  if (bmi < 18.5)
    return { label: "abaixo do peso", color: "text-blue-500", msg: "Considere ganhar massa muscular com uma dieta equilibrada." };
  if (bmi < 25)
    return { label: "saudável", color: "text-green-600", msg: "Continue mantendo seus hábitos saudáveis!" };
  if (bmi < 30)
    return { label: "sobrepeso", color: "text-orange-500", msg: "Mantenha-se positivo e concentre-se em uma dieta equilibrada e exercícios." };
  return { label: "obesidade", color: "text-red-500", msg: "Concentre-se em mudanças graduais de hábitos e exercícios consistentes." };
}

function StepWeight({
  value,
  onChange,
  heightCm,
  onNext,
}: {
  value: number;
  onChange: (v: number) => void;
  heightCm: number;
  onNext: () => void;
}) {
  const [unit, setUnit] = useState("kg");
  const display = unit === "kg" ? value : Math.round(value * 2.205);
  const bmi = value / ((heightCm / 100) ** 2);
  const cat = bmiCategory(bmi);
  return (
    <div className="max-w-md mx-auto w-full px-6 py-10 text-center">
      <h2 className="text-2xl font-extrabold text-foreground">
        Qual é o seu peso agora?
      </h2>
      <div className="mt-5 flex justify-center">
        <UnitToggle unit={unit} options={["kg", "Libra"]} onChange={setUnit} />
      </div>
      <div className="mt-6">
        <span className="text-6xl font-black text-foreground">{display}</span>
        <span className="text-xl text-muted-foreground ml-1">{unit}</span>
      </div>
      <RulerSlider value={value} min={40} max={150} onChange={onChange} />
      <div className="mt-6 bg-card rounded-xl p-4 text-left">
        <p className="text-sm text-foreground">
          Seu IMC é <strong>{bmi.toFixed(2)}</strong>, que é considerado{" "}
          <strong className={cat.color}>{cat.label}</strong>.
        </p>
        <p className="text-xs text-muted-foreground mt-1">{cat.msg}</p>
      </div>
      <div className="mt-6">
        <PrimaryButton onClick={onNext}>Próximo passo</PrimaryButton>
      </div>
    </div>
  );
}

function StepTargetWeight({
  value,
  onChange,
  onNext,
}: {
  value: number;
  onChange: (v: number) => void;
  onNext: () => void;
}) {
  const [unit, setUnit] = useState("kg");
  const display = unit === "kg" ? value : Math.round(value * 2.205);
  return (
    <div className="max-w-md mx-auto w-full px-6 py-10 text-center">
      <h2 className="text-2xl font-extrabold text-foreground">
        Qual é o seu peso alvo?
      </h2>
      <div className="mt-5 flex justify-center">
        <UnitToggle unit={unit} options={["kg", "Libra"]} onChange={setUnit} />
      </div>
      <div className="mt-6">
        <span className="text-6xl font-black text-foreground">{display}</span>
        <span className="text-xl text-muted-foreground ml-1">{unit}</span>
      </div>
      <RulerSlider value={value} min={40} max={120} onChange={onChange} />
      <div className="mt-6">
        <PrimaryButton onClick={onNext}>Próximo passo</PrimaryButton>
      </div>
    </div>
  );
}

function StepAgeInput({
  value,
  onChange,
  onNext,
}: {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
}) {
  const valid = Number(value) >= 10 && Number(value) <= 100;
  return (
    <div className="max-w-md mx-auto w-full px-6 py-10 text-center">
      <h2 className="text-2xl font-extrabold text-foreground">
        Qual é a sua idade?
      </h2>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Digite sua idade"
        className="mt-8 w-full rounded-full border border-border bg-background px-6 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
      />
      <div className="mt-6 bg-card rounded-xl p-4 text-left flex gap-3">
        <span className="w-6 h-6 rounded-full bg-primary-soft text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
          <Info size={14} />
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">
            Perguntamos sua idade para personalizar seu plano
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            As pessoas mais velhas têm um percentual de gordura corporal mais
            alto do que as pessoas mais jovens com o mesmo IMC.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <PrimaryButton onClick={onNext} disabled={!valid}>
          Próximo passo
        </PrimaryButton>
      </div>
    </div>
  );
}

function StepFinal({ answers: _answers }: { answers: Record<string, unknown> }) {
  const COUNTDOWN_SECS = 8 * 60; // 08:00

  const [unlocked, setUnlocked] = useState(true);
  const [offerLeft, setOfferLeft] = useState(COUNTDOWN_SECS);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const planDate = useTargetDate(21);
  const today = useMemo(() => {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    const t = setInterval(() => {
      setOfferLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, [unlocked]);

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const testimonials = [
    {
      img: beatrizImg,
      name: "Beatriz: -3kg e Corpo Tonificado em 21 dias",
      text: "“Eu não estava muito acima do peso, mas meu corpo não tinha forma nenhuma e eu me sentia 'mole'. Com a Calistenia Asiática, a ativação das fibras profundas esculpiu meu corpo. Em 21 dias, perdi 3kg de gordura e minha barriga ficou durinha. Meu corpo finalmente ganhou desenho e me sinto muito mais firme e segura.”",
    },
    {
      img: carlaImg,
      name: "Carla: -13kg em 21 dias",
      text: "“Eu estava perdida, sem energia e com muita vergonha do meu corpo. Achava que precisaria de horas na academia, mas a Calistenia Asiática mudou tudo. Redescobri minha força treinando no meu próprio quarto. Hoje me sinto empoderada, confiante e 13kg mais leve em apenas 3 semanas. Foi a melhor decisão que tomei!”",
    },
    {
      img: fernandaImg,
      name: "Fernanda: -4kg em 14 dias",
      text: "“Sempre fui desconfiada com promessas rápidas, mas as fotos não mentem. Em apenas duas semanas, a ativação das fibras profundas 'sugou' minha barriga por dentro de um jeito que abdominal nenhum fez. Perdi 4kg muito rápido e o inchaço sumiu. Se em 14 dias estou assim, imagina no final do protocolo!”",
    },
    {
      img: julianaImg,
      name: "Juliana: -8kg em 21 dias (Mãe de 2 filhos)",
      text: "“Depois da gravidez, essa 'pochete' não saía por nada e minha postura estava horrível. Os movimentos suaves da Calistenia Asiática foram a minha salvação. Recuperei minha postura e eliminei 8kg em 21 dias. Finalmente estou vendo minha barriga ficar retinha de novo, sem precisar de impacto.”",
    },
  ];

  const benefits = [
    {
      title: "Ativação das Fibras Profundas:",
      text: "o segredo asiático para destravar o metabolismo e queimar gordura de verdade, sem precisar se matar na academia.",
    },
    {
      title: `Cronograma "Barriga Chapada" em 21 Dias:`,
      text: `um passo a passo diário e direto ao ponto para você saber exatamente o que fazer até o dia ${planDate}.`,
    },
    {
      title: "Guia de Alimentação Metabólica:",
      text: "receitas práticas e gostosas para acelerar a queima de gordura enquanto você descansa.",
    },
    {
      title: "Recuperação e Alívio Articular:",
      text: "exercícios suaves e sem impacto feitos para fortalecer suas articulações e eliminar dores enquanto você elimina peso.",
    },
    {
      title: "Explosão de Vitalidade:",
      text: "técnicas de ativação que combatem o cansaço constante e devolvem sua disposição logo nos primeiros dias.",
    },
  ];

  const bonuses = [
    { n: "1.", title: "Chá Asiático Anticelulite", text: "Misture uma planta pouco conhecida com água morna para assistir às celulites sumindo dia após dia." },
    { n: "2.", title: "Dieta 100% Personalizada", text: "Você terá acesso a diversas receitas para preparar e ver a gordura indo embora muito mais rápido." },
    { n: "3.", title: "Cronograma de Alimentação Inteligente", text: "O passo a passo completo para manter seu metabolismo acelerado e sua reeducação alimentar." },
    { n: "4.", title: "Suporte 24h Todos os Dias", text: "Nosso time estará pronto para te ajudar com qualquer dúvida, independente do horário." },
  ];

  const faqs = [
    {
      q: "Quais exercícios a Calistenia inclui?",
      a: "Movimentos suaves e de baixo impacto que ativam as fibras profundas: alongamentos dinâmicos, ativação pélvica, agachamentos guiados, pranchas adaptadas e respiração consciente. Tudo feito em casa, sem academia.",
    },
    {
      q: "Como vou descobrir qual programa é ideal para mim?",
      a: "Seu plano já foi montado com base nas respostas do teste — peso atual, objetivo, idade e rotina. Ao acessar, você verá o cronograma diário pronto para começar.",
    },
    {
      q: "Como posso acessar meu plano?",
      a: "Após a compra, você recebe acesso imediato por e-mail. É só clicar no link e seu programa estará liberado em qualquer dispositivo (celular, tablet ou computador).",
    },
  ];

  const Cta = ({ label = "Obter meu plano personalizado agora" }: { label?: string }) => (
    <button
      onClick={() => {
        const url = new URL("https://pay.cakto.com.br/xtsj5ap_905938");
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.forEach((value, key) => {
          url.searchParams.set(key, value);
        });
        window.location.href = url.toString();
      }}
      className="w-full rounded-2xl bg-primary text-white font-bold py-4 px-6 shadow-[0_10px_30px_-12px_oklch(0.62_0.19_5/0.6)] hover:brightness-105 active:scale-[0.99] transition outline outline-2 outline-offset-2 outline-primary/20"
    >
      {label}
    </button>
  );

  return (
    <div className="w-full">
      {unlocked && (
        <div className="sticky top-0 z-20 bg-primary text-white text-sm font-semibold py-2 px-4 text-center">
          Oferta expira em: <span className="font-mono tabular-nums ml-1">{fmt(offerLeft)}</span>
        </div>
      )}

      <div className="max-w-xl mx-auto w-full px-5 pt-8 pb-16">
        {/* Top: title + video */}
        <h1 className="text-center text-2xl md:text-3xl font-extrabold text-primary leading-tight">
          Seu plano de Calistenia<br />Asiática está pronto!
        </h1>
        <p className="mt-3 text-center text-muted-foreground">
          Assista ao vídeo abaixo para entender como funciona…
        </p>

        <div className="mt-6 relative rounded-2xl overflow-hidden bg-black aspect-[9/14] shadow-lg">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            playsInline
            preload="metadata"
            src="/videos/programa-calistenia.mp4"
          />
        </div>

        {unlocked && (
          <div className="mt-8 space-y-8 animate-in fade-in duration-500">
            <Cta />
            <div className="text-center text-sm font-semibold text-primary flex items-center justify-center gap-1">
              <Flame size={16} /> Restam apenas 6 vagas
            </div>

            {/* O que você vai receber */}
            <section className="bg-card border border-border rounded-2xl p-5 shadow-sm">
              <h3 className="text-center font-bold text-foreground">O que você vai receber</h3>
              <ul className="mt-5 space-y-4">
                {benefits.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-bold text-foreground">{b.title}</span> {b.text}
                    </p>
                  </li>
                ))}
              </ul>
              <img src={appMockup} alt="" className="mt-6 w-full h-auto" loading="lazy" />
            </section>

            {/* Price card */}
            <section className="bg-card border-2 border-primary/30 rounded-2xl p-6 text-center shadow-sm">
              <div className="text-sm font-semibold text-primary flex items-center justify-center gap-1">
                <Flame size={16} /> Restam apenas 6 vagas
              </div>
              <div className="mt-3 text-muted-foreground">
                De <span className="line-through">R$297,00</span>
              </div>
              <div className="mt-1 flex items-end justify-center gap-1">
                <span className="text-muted-foreground text-lg">por</span>
                <span className="text-primary font-extrabold text-5xl leading-none">R$37,90</span>
              </div>
              <div className="mt-3 text-primary font-semibold text-sm">
                Desconto válido apenas hoje, {today}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Pagamento único · Acesso completo ao programa
              </div>
              <div className="mt-2 text-xs text-muted-foreground flex items-center justify-center gap-1">
                <ShieldCheck size={12} /> Compra 100% Segura · 30 Dias de Garantia Incondicional
              </div>
            </section>

            <Cta />

            {/* Testimonials */}
            <section>
              <h3 className="text-center font-bold text-foreground">Resultados que nos deixam orgulhosos</h3>
              <div className="mt-5 space-y-5">
                {testimonials.map((t) => (
                  <article key={t.name} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                    <img src={t.img} alt={t.name} className="w-full h-auto" loading="lazy" />
                    <div className="p-4">
                      <h4 className="font-bold text-primary">{t.name}</h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <Cta />

            {/* Bonuses */}
            <section className="bg-card border border-border rounded-2xl p-5 shadow-sm">
              <h3 className="text-center font-bold text-foreground">+Bônus Exclusivos</h3>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Além de você ter acesso às aulas e ao seu plano personalizado, separamos diversos bônus para te ajudar a acelerar o seu processo de emagrecimento rápido:
              </p>
              <div className="mt-5 space-y-4">
                {bonuses.map((b) => (
                  <div key={b.n}>
                    <p className="font-bold text-primary text-sm">
                      {b.n} {b.title}
                      <span className="text-muted-foreground font-normal"> - {b.text}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Guarantee */}
            <section className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm">
              <img src={garantiaImg} alt="Garantia 30 dias" className="w-24 h-24 mx-auto object-contain" loading="lazy" />
              <h3 className="mt-4 font-bold text-foreground">30 Dias de Garantia Incondicional</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Nós confiamos tanto nos resultados do Protocolo de Calistenia Asiática que o risco é todo nosso.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Você tem 30 dias inteiros para testar o aplicativo e todos os bônus. Se por qualquer motivo você não estiver 100% satisfeita, nós devolveremos todo o seu investimento.
              </p>
              <p className="mt-4 text-sm font-bold text-foreground">
                Reembolso total e imediato, sem perguntas e sem complicações.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h3 className="font-bold text-foreground">Perguntas frequentes</h3>
              <div className="mt-3 space-y-2">
                {faqs.map((f, i) => (
                  <div key={f.q} className="bg-card border border-border rounded-full overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full px-5 py-3 flex items-center justify-between text-left text-sm text-foreground"
                    >
                      <span>{f.q}</span>
                      <ChevronDown size={18} className={cn("transition", openFaq === i && "rotate-180")} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <Cta />

            <div className="text-center text-xs text-muted-foreground pt-4">
              <a href="#" className="underline">Termos de Serviço</a> e{" "}
              <a href="#" className="underline">Política de Privacidade</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* --------- Lifestyle Steps --------- */

function SideImageLayout({
  title,
  highlight,
  image,
  bgGray,
  mobileImageClassName,
  children,
}: {
  title: ReactNode;
  highlight?: string;
  image: string;
  bgGray?: boolean;
  mobileImageClassName?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative max-w-6xl mx-auto w-full px-6 pt-8 pb-16 flex-1 flex flex-col md:flex-row items-center md:items-end gap-8 min-h-[600px] md:min-h-0 overflow-hidden",
        bgGray && "md:rounded-3xl md:my-6 md:bg-secondary/40",
      )}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className={cn(
          "absolute right-[-18px] bottom-0 h-[58%] max-h-[380px] w-auto object-contain pointer-events-none z-0 md:hidden",
          mobileImageClassName,
        )}
      />
      <div className="flex-1 w-full max-w-xl relative z-10">
        <h2 className="text-xl md:text-2xl font-extrabold text-center md:text-left text-foreground">
          {title}
          {highlight && <span className="text-primary"> {highlight}</span>}
        </h2>
        <div className="mt-8 w-full max-w-[52%] md:max-w-md space-y-3">{children}</div>
      </div>
      <div className="hidden md:block w-[340px] flex-shrink-0">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

function StepTypicalDay({ onPick }: { onPick: (v: string) => void }) {
  const items = [
    {
      label: "Sedentário",
      description: "Eu passo a maior parte do dia sentado",
      thumb: daySedentary,
    },
    {
      label: "Atividade moderada",
      description: "Eu faço pausas ativas",
      thumb: dayModerate,
    },
    {
      label: "Eu sou imparável",
      description: "Estou de pé o dia todo",
      thumb: dayActive,
    },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Como você descreveria seu dia típico?
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            description={i.description}
            thumb={i.thumb}
            thumbShape="square"
            onClick={() => onPick(i.label)}
          />
        ))}
      </div>
    </div>
  );
}

function StepEnergy({ onPick }: { onPick: (v: string) => void }) {
  const options = [
    "Baixo, sinto-me cansada durante todo o dia",
    "Queda pós-almoço",
    "Arrastando antes das refeições",
    "Alto e estável",
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Como estão seus níveis de energia durante o dia?
      </h2>
      <div className="mt-8 space-y-3">
        {options.map((o) => (
          <OptionCard key={o} label={o} onClick={() => onPick(o)} />
        ))}
      </div>
    </div>
  );
}

function StepWater({ onPick }: { onPick: (v: string) => void }) {
  const options = [
    "Eu só tomo café ou chá",
    "Cerca de 2 copos (0,5 L)",
    "2 a 6 copos (0,5–1,5 L)",
    "Mais de 6 copos",
  ];
  return (
    <SideImageLayout
      title={
        <>
          Quanto de <span className="text-primary">água</span> você bebe diariamente?
        </>
      }
      image={womanWater}
      mobileImageClassName="right-[-8px] h-[62%] max-h-[420px]"
    >
      {options.map((o) => (
        <OptionCard key={o} label={o} onClick={() => onPick(o)} />
      ))}
    </SideImageLayout>
  );
}

function StepSleep({ onPick }: { onPick: (v: string) => void }) {
  const options = ["Menos de 5 horas", "5–6 horas", "7–8 horas", "Mais de 8 horas"];
  return (
    <SideImageLayout
      title={<>Quantas horas você costuma dormir?</>}
      image={womanSleep}
      bgGray
      mobileImageClassName="right-[-10px] h-[60%] max-h-[410px]"
    >
      {options.map((o) => (
        <OptionCard key={o} label={o} onClick={() => onPick(o)} />
      ))}
    </SideImageLayout>
  );
}

function StepMealPrefs({
  selected,
  onToggle,
  onNext,
}: {
  selected: string[];
  onToggle: (v: string) => void;
  onNext: () => void;
}) {
  const items = [
    { label: "Eu sou vegetariana", description: "Verduras, grãos, mas sem carne animal", thumb: mealVegetarian },
    { label: "Eu sou vegana", description: "Puramente à base de plantas, sem produtos de origem animal", thumb: mealVegan },
    { label: "Não contém glúten", description: "Exclua produtos de grãos que contenham glúten", thumb: mealGlutenfree },
    { label: "Sem lactose", description: "Excluir produtos lácteos", thumb: mealLactosefree },
    { label: "Sem restrições", description: "Aberto a todos os alimentos", thumb: mealNorestrictions },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Quais são suas preferências de refeição?
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            description={i.description}
            thumb={i.thumb}
            thumbShape="square"
            showRadio
            selected={selected.includes(i.label)}
            onClick={() => onToggle(i.label)}
          />
        ))}
      </div>
      <div className="mt-8">
        <PrimaryButton onClick={onNext} disabled={selected.length === 0}>
          Continuar
        </PrimaryButton>
      </div>
    </div>
  );
}

function StepHabits({
  selected,
  onToggle,
  onNext,
}: {
  selected: string[];
  onToggle: (v: string) => void;
  onNext: () => void;
}) {
  const items = [
    { label: "Procrastinação", emoji: "⏰" },
    { label: "Alimentação pouco saudável", emoji: "🍔" },
    { label: "Mídias sociais", emoji: "📱" },
    { label: "Beber muita cafeína", emoji: "☕" },
    { label: "Maratona de séries", emoji: "📺" },
    { label: "Dúvida sobre si mesmo", emoji: "💭" },
    { label: "Roer as unhas", emoji: "✋" },
    { label: "Estar atrasada", emoji: "⏳" },
    { label: "Fumar", emoji: "🚬" },
    { label: "Beber álcool", emoji: "🍷" },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Quais desses hábitos você tem?
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            icon={<span className="text-xl leading-none">{i.emoji}</span>}
            showRadio
            selected={selected.includes(i.label)}
            onClick={() => onToggle(i.label)}
          />
        ))}
      </div>
      <div className="mt-8">
        <PrimaryButton onClick={onNext} disabled={selected.length === 0}>
          Continuar
        </PrimaryButton>
      </div>
    </div>
  );
}

function StepWeightEvents({
  selected,
  onToggle,
  onNext,
}: {
  selected: string[];
  onToggle: (v: string) => void;
  onNext: () => void;
}) {
  const items = [
    { label: "Casamento ou relacionamento", icon: <Heart size={18} /> },
    { label: "Gravidez", icon: <Calendar size={18} /> },
    { label: "Trabalho agitado ou vida familiar", icon: <Briefcase size={18} /> },
    { label: "Estresse ou saúde mental", icon: <Brain size={18} /> },
    { label: "Medicamento ou distúrbio hormonal", icon: <Pill size={18} /> },
    { label: "Nenhuma das acima", icon: <X size={18} /> },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Algum dos eventos abaixo te levou a ganhar peso nos últimos anos?
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            icon={i.icon}
            showRadio
            selected={selected.includes(i.label)}
            onClick={() => onToggle(i.label)}
          />
        ))}
      </div>
      <div className="mt-8">
        <PrimaryButton onClick={onNext} disabled={selected.length === 0}>
          Continuar
        </PrimaryButton>
      </div>
    </div>
  );
}

function StepRecover({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-lg mx-auto w-full px-6 py-10 text-center">
      <img
        src={womanRecover}
        alt=""
        loading="lazy"
        className="rounded-3xl w-full object-cover aspect-[4/3] bg-secondary/40"
      />
      <h2 className="mt-8 text-3xl font-extrabold text-foreground">
        Recupere Seu Corpo!
      </h2>
      <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
        Não sabe por onde começar? Nós já planejamos tudo. Não tem certeza de
        que pode fazer isso? Estamos prontos para motivá-la e apoiá-la!
      </p>
      <div className="mt-8">
        <PrimaryButton onClick={onNext}>Continuar</PrimaryButton>
      </div>
    </div>
  );
}

/* --------- New animated/result steps --------- */

function useTargetDate(daysAhead = 21) {
  return useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + daysAhead);
    const meses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
    ];
    return `${d.getDate()} de ${meses[d.getMonth()]}`;
  }, [daysAhead]);
}

function StepTransformLife({ onNext }: { onNext: () => void }) {
  // line lengths: sqrt((320-80)^2 + dy^2) ~ green 253, red 245 -> use 260
  const LINE_LEN = 260;
  return (
    <div className="max-w-lg mx-auto w-full px-6 py-10 text-center">
      <style>{`
        @keyframes tl-draw { from { stroke-dashoffset: ${LINE_LEN}; } to { stroke-dashoffset: 0; } }
        @keyframes tl-reveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
        @keyframes tl-pop { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.15); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes tl-fade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        .tl-line { stroke-dasharray: ${LINE_LEN}; stroke-dashoffset: ${LINE_LEN}; animation: tl-draw 1.6s ease-out 0.3s forwards; }
        .tl-area { animation: tl-reveal 1.6s ease-out 0.3s both; }
        .tl-dot { transform-origin: center; transform-box: fill-box; opacity: 0; animation: tl-pop 0.45s cubic-bezier(.34,1.56,.64,1) forwards; }
        .tl-label { opacity: 0; animation: tl-fade 0.5s ease-out forwards; }
      `}</style>
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
        É assim que a{" "}
        <span className="text-primary">transformação da sua vida</span>{" "}
        se parece
      </h2>
      <p className="mt-4 text-muted-foreground text-sm">
        Com base nas suas respostas, prevemos que você está entre as mulheres
        com mais chances de atingir seus objetivos!
      </p>
      <div className="mt-10 relative h-[260px] w-full">
        <svg viewBox="0 0 360 240" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="greenFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="redFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <line x1="80" y1="20" x2="80" y2="200" stroke="#cbd5e1" strokeDasharray="4 4" />
          <path className="tl-area" d="M80,120 L320,40 L320,200 L80,200 Z" fill="url(#greenFill)" />
          <path className="tl-area" d="M80,120 L320,170 L320,200 L80,200 Z" fill="url(#redFill)" />
          <line className="tl-line" x1="80" y1="120" x2="320" y2="40" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
          <line className="tl-line" x1="80" y1="120" x2="320" y2="170" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
          <circle className="tl-dot" style={{ animationDelay: "0.1s" }} cx="80" cy="120" r="6" fill="#ef4444" />
          <circle className="tl-dot" style={{ animationDelay: "1.7s" }} cx="320" cy="40" r="6" fill="#22c55e" />
          <circle className="tl-dot" style={{ animationDelay: "1.7s" }} cx="320" cy="170" r="6" fill="#ef4444" />
        </svg>
        <div className="absolute tl-label" style={{ left: "calc(80/360*100% - 28px)", top: "calc(120/240*100% - 36px)", animationDelay: "0.2s" }}>
          <span className="inline-block bg-white border border-border rounded-full px-3 py-1 text-xs font-semibold shadow">Você</span>
        </div>
        <div className="absolute tl-label" style={{ left: "calc(320/360*100% - 80px)", top: "calc(40/240*100% - 16px)", animationDelay: "1.8s" }}>
          <span className="inline-block bg-green-500 text-white rounded-full px-3 py-1 text-xs font-semibold shadow">Com Calistenia Asiática</span>
        </div>
        <div className="absolute tl-label" style={{ left: "calc(320/360*100% - 70px)", top: "calc(170/240*100% - 14px)", animationDelay: "1.8s" }}>
          <span className="inline-block bg-red-500 text-white rounded-full px-3 py-1 text-xs font-semibold shadow">Sem mudanças</span>
        </div>
      </div>
      <div className="mt-8">
        <PrimaryButton onClick={onNext}>Continuar</PrimaryButton>
      </div>
    </div>
  );
}

function StepBuildingPlan({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const slides = [transformation1, transformation2, transformation3];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const startedAt = Date.now();
    const total = 6000;
    const id = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const next = Math.min(100, Math.round((elapsed / total) * 100));
      setPct(next);
      if (next >= 100) {
        clearInterval(id);
        setTimeout(onDone, 400);
      }
    }, 60);
    return () => clearInterval(id);
  }, [onDone]);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 1800);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="max-w-md mx-auto w-full px-6 py-10 text-center">
      <h2 className="text-2xl font-extrabold text-foreground leading-tight">
        Aguarde, estamos criando seu plano personalizado
      </h2>
      <div className="mt-6">
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-150"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-2 text-sm font-semibold text-muted-foreground">{pct}%</div>
      </div>
      <div className="mt-8 relative aspect-[3/4] w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden bg-secondary/40">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              i === slide ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Resultados reais de usuárias do programa.
      </p>
    </div>
  );
}

function StepWeightProjection({
  weightKg,
  targetKg,
  onNext,
}: {
  weightKg: number;
  targetKg: number;
  onNext: () => void;
}) {
  return (
    <div className="max-w-lg mx-auto w-full px-6 py-10 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
        O último plano que você precisará para ficar em forma
      </h2>
      <p className="mt-4 text-muted-foreground text-sm">Prevemos que você estará com</p>
      <div className="mt-2 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-lg font-bold">
        <span className="text-lg">{targetKg}kg</span>
        <span className="text-foreground text-sm font-semibold">em até 21 dias</span>
      </div>

      <div className="mt-8 relative h-[220px] w-full">
        <style>{`
          @keyframes wp-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
          @keyframes wp-reveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
          @keyframes wp-pop { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.15); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
          @keyframes wp-fade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
          .wp-line { stroke-dasharray: 1; stroke-dashoffset: 1; animation: wp-draw 2s ease-out 0.3s forwards; }
          .wp-area { animation: wp-reveal 2s ease-out 0.3s both; }
          .wp-dot { transform-origin: center; transform-box: fill-box; opacity: 0; animation: wp-pop 0.45s cubic-bezier(.34,1.56,.64,1) forwards; }
          .wp-label { opacity: 0; animation: wp-fade 0.5s ease-out forwards; }
        `}</style>
        <svg viewBox="0 0 360 220" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="weightGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="weightLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <path className="wp-area" d="M50,40 Q150,90 180,130 T320,170 L320,200 L50,200 Z" fill="url(#weightGrad)" />
          <path className="wp-line" pathLength={1} d="M50,40 Q150,90 180,130 T320,170" stroke="url(#weightLine)" strokeWidth="3" strokeLinecap="round" fill="none" />
          <line x1="180" y1="40" x2="180" y2="130" stroke="#cbd5e1" strokeDasharray="4 4" />
          <circle className="wp-dot" style={{ animationDelay: "0.2s" }} cx="50" cy="40" r="6" fill="#ef4444" />
          <circle className="wp-dot" style={{ animationDelay: "1.2s" }} cx="180" cy="130" r="6" fill="#f59e0b" />
          <circle className="wp-dot" style={{ animationDelay: "2.2s" }} cx="320" cy="170" r="6" fill="#22c55e" />
        </svg>
        <div className="absolute wp-label" style={{ left: "calc(50/360*100% - 22px)", top: "calc(40/220*100% - 30px)", animationDelay: "0.3s" }}>
          <span className="inline-block bg-red-500 text-white rounded-md px-2 py-0.5 text-xs font-bold shadow">{weightKg}kg</span>
        </div>
        <div className="absolute wp-label" style={{ left: "calc(180/360*100% - 38px)", top: "calc(130/220*100% - 30px)", animationDelay: "1.3s" }}>
          <span className="inline-block bg-white border border-border rounded-md px-2 py-0.5 text-xs font-semibold text-blue-700 shadow">Semana 2</span>
        </div>
        <div className="absolute wp-label" style={{ left: "calc(320/360*100% - 50px)", top: "calc(170/220*100% - 14px)", animationDelay: "2.3s" }}>
          <span className="inline-block bg-green-500 text-white rounded-md px-2 py-0.5 text-xs font-bold shadow">{targetKg}kg</span>
        </div>
      </div>

      <h3 className="mt-6 text-lg font-extrabold text-primary">
        Protocolo de 21 dias quase pronto!
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        De acordo com as suas respostas, você está pronta para ter resultados
        em 21 dias com o nosso programa.
      </p>
      <div className="mt-6">
        <PrimaryButton onClick={onNext}>Continuar</PrimaryButton>
      </div>
    </div>
  );
}

function StepProfileReady({
  heightCm,
  weightKg,
  onNext,
}: {
  heightCm: number;
  weightKg: number;
  onNext: () => void;
}) {
  const bmi = useMemo(() => {
    const h = heightCm / 100;
    return Math.round((weightKg / (h * h)) * 10) / 10;
  }, [heightCm, weightKg]);
  // map BMI 15-40 to percent on bar
  const pct = Math.max(0, Math.min(100, ((bmi - 15) / (40 - 15)) * 100));
  const category =
    bmi < 18.5 ? "Abaixo do peso" : bmi < 25 ? "Normal" : bmi < 30 ? "Sobrepeso" : "Obeso";

  return (
    <div className="max-w-md mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Seu perfil está pronto
      </h2>

      <div className="mt-6 bg-card rounded-2xl shadow-[0_2px_10px_-4px_oklch(0_0_0/0.08)] p-5">
        <style>{`
          @keyframes bmi-slide { from { left: 0%; } to { left: var(--bmi-pct); } }
          @keyframes bmi-fade { from { opacity: 0; } to { opacity: 1; } }
          .bmi-marker { animation: bmi-slide 1.6s cubic-bezier(.5,.05,.2,1) 0.2s both; }
          .bmi-label { animation: bmi-slide 1.6s cubic-bezier(.5,.05,.2,1) 0.2s both, bmi-fade 0.4s ease-out 0.2s both; }
        `}</style>
        <div className="text-sm text-muted-foreground">Índice de Massa Corporal (IMC)</div>
        <div className="mt-4 relative" style={{ "--bmi-pct": `${pct}%` } as Record<string, string>}>
          <div className="absolute -top-8 -translate-x-1/2 z-10 bmi-label">
            <div className="bg-foreground text-background text-xs font-bold rounded px-2 py-1 whitespace-nowrap">
              Você – {bmi}
            </div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mb-1 px-1">
            <span>15</span>
            <span>18,5</span>
            <span>25</span>
            <span>30</span>
            <span>40</span>
          </div>
          <div className="h-3 rounded-full relative" style={{ background: "linear-gradient(90deg,#3b82f6 0%,#22c55e 30%,#fbbf24 60%,#ef4444 100%)" }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-foreground bmi-marker" />
          </div>
          <div className="flex justify-between text-[10px] font-semibold text-muted-foreground mt-2 px-1">
            <span>ABAIXO DO PESO</span>
            <span>NORMAL</span>
            <span>SOBREPESO</span>
            <span>OBESO</span>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-primary/5 border border-primary/30 rounded-2xl p-4">
        <div className="flex items-center gap-2 text-primary font-bold">
          <Info size={16} /> Alerta de Estagnação:
        </div>
        <p className="mt-2 text-sm text-primary/90 leading-relaxed">
          Cuidado com o efeito "falsa magra". Seu peso está {category.toLowerCase()},
          mas seu metabolismo está estagnado. Sem a ativação das fibras
          profundas, o corpo acumula gordura visceral e perde a definição.
          Você precisa destravar sua queima natural agora para evitar a
          flacidez e o envelhecimento metabólico.
        </p>
      </div>

      <div className="mt-4 bg-card rounded-2xl shadow-[0_2px_10px_-4px_oklch(0_0_0/0.08)] divide-y divide-border">
        <ProfileRow icon={<Activity size={18} />} label="Estilo de vida" value="Moderado" />
        <ProfileRow icon={<User size={18} />} label="Nível de condicionamento" value="Iniciante" />
        <ProfileRow icon={<Flame size={18} />} label="Metabolismo" value="Preguiçoso, tendência à flacidez" />
      </div>

      <div className="mt-8">
        <PrimaryButton onClick={onNext}>Continuar</PrimaryButton>
      </div>
    </div>
  );
}

function ProfileRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 p-4">
      <span className="text-muted-foreground">{icon}</span>
      <div className="flex-1">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-bold text-foreground text-sm">{value}</div>
      </div>
    </div>
  );
}

function StepMainMotivation({ onPick }: { onPick: (v: string) => void }) {
  const items = [
    { label: "Me sentir mais confiante com o meu corpo.", icon: <Sparkles size={18} /> },
    { label: "Ficar mais saudável e ter mais energia.", icon: <Zap size={18} /> },
    { label: "Me sentir bem nas minhas roupas.", icon: <Shirt size={18} /> },
    { label: "Recuperar o corpo e a autoestima após o parto.", icon: <Baby size={18} /> },
    { label: "Outro.", icon: <MoreHorizontal size={18} /> },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground">
        Qual é o seu principal motivo para transformar o seu corpo?
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            icon={i.icon}
            showArrow
            onClick={() => onPick(i.label)}
          />
        ))}
      </div>
    </div>
  );
}

function StepConfidence({ onPick }: { onPick: (v: string) => void }) {
  const date = useTargetDate(21);
  const items = [
    { label: "Eu sei que consigo!", icon: <Rocket size={18} /> },
    { label: "Estou disposta a tentar algo novo!", icon: <Sparkles size={18} /> },
    { label: "Ainda sinto insegurança, mas quero mudar!", icon: <Heart size={18} /> },
  ];
  return (
    <div className="max-w-xl mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground leading-tight">
        Quão confiante você está em entrar em forma até o dia{" "}
        <span className="text-primary">{date}</span>?
      </h2>
      <div className="mt-8 space-y-3">
        {items.map((i) => (
          <OptionCard
            key={i.label}
            label={i.label}
            icon={i.icon}
            showArrow
            onClick={() => onPick(i.label)}
          />
        ))}
      </div>
    </div>
  );
}

function StepPlanReady({
  weightKg,
  targetKg,
  onNext,
}: {
  weightKg: number;
  targetKg: number;
  onNext: () => void;
}) {
  const date = useTargetDate(21);
  return (
    <div className="max-w-md mx-auto w-full px-6 py-10">
      <h2 className="text-2xl font-extrabold text-center text-foreground leading-tight">
        Seu plano de Calistenia Asiática Atlas está{" "}
        <span className="text-primary">Quase</span> pronto!
      </h2>

      <div className="mt-6 bg-card rounded-2xl shadow-[0_2px_10px_-4px_oklch(0_0_0/0.08)] p-5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-2">Agora</div>
            <img src={bodySkinnyfat} alt="" className="rounded-xl w-full aspect-[3/4] object-cover" />
          </div>
          <ChevronRight className="text-muted-foreground" />
          <div className="text-center">
            <div className="text-xs text-primary mb-2">Seu objetivo</div>
            <img src={bodySlim} alt="" className="rounded-xl w-full aspect-[3/4] object-cover" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 text-left border-t border-border pt-4">
          <div>
            <div className="text-xs text-muted-foreground">Peso atual</div>
            <div className="font-extrabold text-foreground">{weightKg} kg</div>
          </div>
          <div>
            <div className="text-xs text-primary">Peso desejado</div>
            <div className="font-extrabold text-primary">{targetKg} kg</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Gordura corporal</div>
            <div className="font-bold text-foreground text-sm">Acima do normal</div>
          </div>
          <div>
            <div className="text-xs text-primary">Gordura corporal</div>
            <div className="font-bold text-foreground text-sm">Normal</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Nível de treino de calistenia</div>
            <div className="font-bold text-foreground text-sm">Iniciante</div>
            <div className="mt-1 flex gap-1">
              <span className="h-1.5 flex-1 bg-primary rounded-full" />
              <span className="h-1.5 flex-1 bg-secondary rounded-full" />
              <span className="h-1.5 flex-1 bg-secondary rounded-full" />
            </div>
          </div>
          <div>
            <div className="text-xs text-primary">Nível de treino de calistenia</div>
            <div className="font-bold text-foreground text-sm">Avançado</div>
            <div className="mt-1 flex gap-1">
              <span className="h-1.5 flex-1 bg-primary rounded-full" />
              <span className="h-1.5 flex-1 bg-primary rounded-full" />
              <span className="h-1.5 flex-1 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-start gap-3">
        <Target size={18} className="text-primary mt-0.5 flex-shrink-0" />
        <p className="text-sm text-foreground">
          <strong className="text-primary">Foco do Protocolo:</strong> Vitalidade máxima e fim do cansaço metabólico.
        </p>
      </div>
      <div className="mt-3 bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-start gap-3">
        <CalendarDays size={18} className="text-primary mt-0.5 flex-shrink-0" />
        <p className="text-sm text-foreground">
          O Protocolo foi ajustado para garantir sua constância. Você atingirá
          o pico de queima metabólica até o dia {date}.
        </p>
      </div>
      <div className="mt-3 bg-secondary/40 border border-border rounded-2xl p-4 flex items-start gap-3">
        <ShieldCheck size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-foreground text-center w-full">
          Método <strong>sem impacto</strong> — seguro para qualquer idade e condição física
        </p>
      </div>

      <div className="mt-8">
        <PrimaryButton onClick={onNext}>CONTINUAR</PrimaryButton>
      </div>
    </div>
  );
}

