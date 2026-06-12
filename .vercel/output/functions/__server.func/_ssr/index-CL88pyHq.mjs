import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { h as ChevronLeft, I as Info, A as Activity, U as User, F as Flame, i as ChevronRight, T as Target, e as CalendarDays, k as ShieldCheck, f as Check, g as ChevronDown, a as ArrowRight, S as Scale, D as Dumbbell, n as UserCheck, Z as Zap, b as BatteryCharging, M as Moon, c as Brain, j as Move, m as Sparkles, H as Heart, C as Calendar, d as Briefcase, P as Pill, X, l as Shirt, B as Baby, E as Ellipsis, R as Rocket } from "../_libs/lucide-react.mjs";
function QuizLayout({ children, progress, onBack, showBack = true }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-surface flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "bg-background border-b border-border sticky top-0 z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-14 flex items-center justify-center", children: [
        showBack && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onBack,
            "aria-label": "Voltar",
            className: "absolute left-4 text-foreground/70 hover:text-foreground transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 22 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl italic text-primary tracking-wide", children: "CALISTENIA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md", children: "by Atlas" })
        ] })
      ] }),
      progress !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full bg-primary transition-all duration-500",
          style: { width: `${progress}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex flex-col", children })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function OptionCard({
  label,
  description,
  onClick,
  icon,
  thumb,
  thumbShape = "round",
  selected,
  showArrow,
  showRadio,
  variant = "default"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick,
      className: cn(
        "w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all group",
        variant === "default" ? "bg-card shadow-[0_2px_10px_-4px_oklch(0_0_0/0.08)] hover:shadow-[0_6px_18px_-6px_oklch(0_0_0/0.12)]" : "bg-secondary/60 hover:bg-secondary",
        selected && "ring-2 ring-primary"
      ),
      children: [
        thumb && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: thumb,
            alt: "",
            className: cn(
              "w-12 h-12 object-cover flex-shrink-0",
              thumbShape === "square" ? "rounded-xl" : "rounded-full"
            ),
            loading: "lazy"
          }
        ),
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary flex-shrink-0", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-semibold text-foreground text-[0.95rem]", children: label }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground mt-0.5", children: description })
        ] }),
        showArrow && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ArrowRight,
          {
            size: 20,
            className: "text-muted-foreground group-hover:text-primary transition flex-shrink-0"
          }
        ),
        showRadio && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition",
              selected ? "border-primary bg-primary" : "border-border"
            ),
            children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-white" })
          }
        )
      ]
    }
  );
}
function PrimaryButton({
  className,
  children,
  disabled,
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      disabled,
      className: cn(
        "w-full rounded-full py-4 text-white text-base font-semibold uppercase tracking-wide transition-all",
        disabled ? "bg-primary-soft cursor-not-allowed" : "bg-primary hover:brightness-105 active:scale-[0.99] shadow-[0_8px_24px_-8px_oklch(0.62_0.19_5/0.5)]",
        className
      ),
      ...rest,
      children
    }
  );
}
const womanHero = "/assets/woman-hero-BTZnWSHU.png";
const womanExercise = "/assets/woman-calisthenics-CxC8mlGX.webp";
const womanSofa = "/assets/woman-sofa-zpkyRlof.jpg";
const womanOk = "/assets/woman-ok-D86S6c95.jpg";
const womanBestshape = "/assets/woman-fitness-abs-loFQOyPd.webp";
const groupWomen = "/assets/group-women-CrprXgQm.jpg";
const thumbChin = "/assets/thumb-chin-pN7R374N.jpg";
const thumbArms = "/assets/thumb-arms-DQBWlWeX.jpg";
const thumbChest = "/assets/thumb-chest-DbOcxab0.jpg";
const thumbBelly = "/assets/thumb-belly-DYafbOkD.jpg";
const thumbKnees = "/assets/thumb-knees-BxQ3GGbR.jpg";
const thumbSaddlebags = "/assets/thumb-saddlebags-C-I_Rz97.jpg";
const thumbGlutes = "/assets/thumb-glutes-CjHQPfk6.jpg";
const thumbThighs = "/assets/thumb-thighs-Dq90GDXc.jpg";
const thumbAbs = "/assets/thumb-abs-DxZVCBze.jpg";
const thumbButt = "/assets/thumb-butt-DALlvvim.jpg";
const thumbLegs = "/assets/thumb-legs-BQNgu44S.jpg";
const thumbBack = "/assets/thumb-back-DFc4Yx45.jpg";
const thumbBiceps = "/assets/thumb-biceps-NnbYY-Pf.jpg";
const thumbPecs = "/assets/thumb-pecs-CZ2kXGb4.jpg";
const bodySlim = "/assets/body-slim-CRtSlHY8.jpg";
const bodySkinnyfat = "/assets/body-skinnyfat-x-1-1ydq.jpg";
const bodyOverweight = "/assets/body-overweight-BznH5MtH.jpg";
const bodyPlus = "/assets/body-plus-MZ59hHTc.jpg";
const painBack = "/assets/thumb-pain-back-7oyfRMTk.jpg";
const painKnee = "/assets/thumb-pain-knee-B3PskAWm.jpg";
const painHip = "/assets/thumb-pain-hip-LE1zV5kI.jpg";
const painShoulder = "/assets/thumb-pain-shoulder-D4CRyn2J.jpg";
const painCalf = "/assets/thumb-pain-calf-C-qdlVY5.jpg";
const daySedentary = "/assets/day-sedentary-Be_K356F.jpg";
const dayModerate = "/assets/day-moderate-aSIR-V88.jpg";
const dayActive = "/assets/day-active-uoUIJ9Fw.jpg";
const womanWater = "/assets/woman-water-CAM-u8iU.jpg";
const womanSleep = "/assets/woman-sleep-CmUK3yee.jpg";
const mealVegetarian = "/assets/meal-vegetarian-Dt-IlLa0.jpg";
const mealVegan = "/assets/meal-vegan-MyqkLBsH.jpg";
const mealGlutenfree = "/assets/meal-glutenfree-kUbk5Bax.jpg";
const mealLactosefree = "/assets/meal-lactosefree-CBIaKmid.jpg";
const mealNorestrictions = "/assets/meal-norestrictions-B976QL_T.jpg";
const womanRecover = "/assets/woman-recover-aV0DIDQ3.jpg";
const transformation1 = "/assets/transformation-1-a90ZzNIx.webp";
const transformation2 = "/assets/transformation-2-Cx2QT2zW.webp";
const transformation3 = "/assets/transformation-3-D2ajMZTy.webp";
const appMockup = "/assets/app-mockup-B3X03Zx2.webp";
const beatrizImg = "/assets/beatriz-Otd2-Vi6.webp";
const carlaImg = "/assets/carla-BHnYedbO.webp";
const fernandaImg = "/assets/fernanda-BugOCibs.webp";
const julianaImg = "/assets/juliana-D49AKHtf.webp";
const garantiaImg = "/assets/garantia-30-dias-CrDEWC_J.webp";
const TOTAL_STEPS = 35;
function QuizPage() {
  const [step, setStep] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState({});
  const [expectations, setExpectations] = reactExports.useState([]);
  const [concerns, setConcerns] = reactExports.useState([]);
  const [wholeBody, setWholeBody] = reactExports.useState(false);
  const [targets, setTargets] = reactExports.useState([]);
  const [difficulties, setDifficulties] = reactExports.useState([]);
  const [mealPrefs, setMealPrefs] = reactExports.useState([]);
  const [habits, setHabits] = reactExports.useState([]);
  const [weightEvents, setWeightEvents] = reactExports.useState([]);
  const [heightCm, setHeightCm] = reactExports.useState(165);
  const [weightKg, setWeightKg] = reactExports.useState(73);
  const [targetKg, setTargetKg] = reactExports.useState(57);
  const [age, setAge] = reactExports.useState("");
  reactExports.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);
  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const set = (key, value) => {
    setAnswers((a) => ({
      ...a,
      [key]: value
    }));
    next();
  };
  const toggle = (arr, setArr, value) => {
    setArr(arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value]);
  };
  const toggleWithNone = (arr, setArr, value, noneLabel) => {
    if (value === noneLabel) {
      setArr(arr.includes(value) ? [] : [value]);
    } else {
      setArr(arr.includes(value) ? arr.filter((x) => x !== value) : [...arr.filter((x) => x !== noneLabel), value]);
    }
  };
  const progress = step === 0 ? void 0 : (step + 1) / TOTAL_STEPS * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QuizLayout, { progress, onBack: back, showBack: step > 0, children: [
    step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepAge, { onPick: (v) => set("ageRange", v) }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepSocialProof, { onNext: next }),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepTried, { onPick: (v) => set("tried", v) }),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepDifferent, { onNext: next }),
    step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepGoal, { onPick: (v) => set("goal", v) }),
    step === 5 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepExpectations, { selected: expectations, onToggle: (v) => toggle(expectations, setExpectations, v), onNext: next }),
    step === 6 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepConcerns, { selected: concerns, onToggle: (v) => toggle(concerns, setConcerns, v), wholeBody, onToggleWhole: () => setWholeBody((v) => !v), onNext: next }),
    step === 7 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepTargets, { selected: targets, onToggle: (v) => toggle(targets, setTargets, v), onNext: next }),
    step === 8 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepPromise, { onNext: next }),
    step === 9 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepBodyNow, { onPick: (v) => set("bodyNow", v) }),
    step === 10 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepDreamBody, { onPick: (v) => set("dreamBody", v) }),
    step === 11 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepBestShape, { onPick: (v) => set("bestShape", v) }),
    step === 12 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepDifficulties, { selected: difficulties, onToggle: (v) => toggleWithNone(difficulties, setDifficulties, v, "Nenhuma das opções acima"), onNext: next }),
    step === 13 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepComfort, { onPick: (v) => set("comfort", v) }),
    step === 14 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepCare, { onNext: next }),
    step === 15 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepHeight, { value: heightCm, onChange: setHeightCm, onNext: next }),
    step === 16 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepWeight, { value: weightKg, onChange: setWeightKg, heightCm, onNext: next }),
    step === 17 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepTargetWeight, { value: targetKg, onChange: setTargetKg, onNext: next }),
    step === 18 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepAgeInput, { value: age, onChange: setAge, onNext: () => {
      setAnswers((a) => ({
        ...a,
        age
      }));
      next();
    } }),
    step === 19 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepTypicalDay, { onPick: (v) => set("typicalDay", v) }),
    step === 20 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepEnergy, { onPick: (v) => set("energy", v) }),
    step === 21 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepWater, { onPick: (v) => set("water", v) }),
    step === 22 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepSleep, { onPick: (v) => set("sleep", v) }),
    step === 23 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepMealPrefs, { selected: mealPrefs, onToggle: (v) => toggle(mealPrefs, setMealPrefs, v), onNext: next }),
    step === 24 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepHabits, { selected: habits, onToggle: (v) => toggle(habits, setHabits, v), onNext: next }),
    step === 25 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepWeightEvents, { selected: weightEvents, onToggle: (v) => toggleWithNone(weightEvents, setWeightEvents, v, "Nenhuma das acima"), onNext: next }),
    step === 26 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepRecover, { onNext: next }),
    step === 27 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepTransformLife, { onNext: next }),
    step === 28 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepBuildingPlan, { onDone: next }),
    step === 29 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepWeightProjection, { weightKg, targetKg, onNext: next }),
    step === 30 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepProfileReady, { heightCm, weightKg, onNext: next }),
    step === 31 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepMainMotivation, { onPick: (v) => set("mainMotivation", v) }),
    step === 32 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepConfidence, { onPick: (v) => set("confidence", v) }),
    step === 33 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepPlanReady, { weightKg, targetKg, onNext: next }),
    step === 34 && /* @__PURE__ */ jsxRuntimeExports.jsx(StepFinal, { answers: {
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
      age
    } })
  ] });
}
function StepAge({
  onPick
}) {
  const ages = ["39 – 45", "46 – 50", "51 – 60", "60+"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-6xl mx-auto w-full px-6 pt-8 pb-16 flex-1 flex flex-col md:flex-row items-center md:items-end gap-8 min-h-[640px] md:min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: womanHero, alt: "", "aria-hidden": "true", className: "absolute right-0 bottom-0 w-[65%] max-w-[300px] h-auto object-contain pointer-events-none z-0 md:hidden" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 w-full max-w-xl relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl font-black leading-[1.05] text-foreground", children: [
        "Programa de Calistenia Asiática",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "para Mulheres" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center md:text-left text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase", children: "Teste de 1 minuto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-10 text-xl font-bold text-center md:text-left text-foreground", children: "Quantos anos você tem?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3 w-full max-w-[60%] md:max-w-none", children: ages.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: a, onClick: () => onPick(a), showArrow: true }, a)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-[320px] flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: womanHero, alt: "Mulher fit", width: 320, height: 440, className: "w-full h-auto object-contain" }) })
  ] });
}
function StepSocialProof({
  onNext
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto w-full px-6 py-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: groupWomen, alt: "Grupo de mulheres", loading: "lazy", className: "rounded-3xl w-full object-cover aspect-[4/3]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-8 text-3xl font-extrabold text-foreground", children: "Elas conseguiram e você também pode" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Mais de 27 milhões de mulheres já transformaram suas vidas com a Calistenia Asiática" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "Continuar" }) })
  ] });
}
function StepTried({
  onPick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-6xl mx-auto w-full px-6 pt-8 pb-16 flex-1 flex flex-col md:flex-row items-center md:items-end gap-8 min-h-[640px] md:min-h-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: womanExercise, alt: "", "aria-hidden": "true", className: "absolute right-0 bottom-0 w-[80%] max-w-[320px] h-auto object-contain pointer-events-none z-0 md:hidden" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 w-full max-w-xl relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl md:text-5xl font-black leading-tight text-center md:text-left text-foreground", children: [
        "Você já experimentou exercícios de",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "calistenia" }),
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-3 w-full max-w-[60%] md:max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: "Sim", onClick: () => onPick("sim"), showArrow: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: "Não", onClick: () => onPick("nao"), showArrow: true })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-[340px] flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: womanExercise, alt: "Exercise", width: 340, height: 480, className: "w-full h-auto object-contain" }) })
  ] });
}
function StepDifferent({
  onNext
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto w-full px-6 py-10 flex-1 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10 items-center flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-extrabold leading-tight text-foreground", children: "Você já tem a base, mas a Calistenia Asiática é diferente da calistenia comum." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: [
          "Enquanto o método tradicional foca apenas em força externa, nossa técnica ativa as ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "fibras profundas" }),
          ", agindo na musculatura interna, onde eliminamos a",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "gordura mais difícil de queimar" }),
          " e destravamos o seu metabolismo de forma definitiva."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: womanSofa, alt: "", loading: "lazy", className: "rounded-3xl w-full object-cover aspect-square" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 max-w-lg mx-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "Continuar" }) })
  ] });
}
function StepGoal({
  onPick
}) {
  const goals = [{
    label: "Perder peso",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 18 })
  }, {
    label: "Desenvolver músculos",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { size: 18 })
  }, {
    label: "Manter o peso e ficar em forma",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { size: 18 })
  }, {
    label: "Melhorar a aptidão física",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 18 })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: [
      "Qual é seu ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "principal objetivo" }),
      "?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: goals.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: g.label, icon: g.icon, onClick: () => onPick(g.label) }, g.label)) })
  ] });
}
function StepExpectations({
  selected,
  onToggle,
  onNext
}) {
  const items = [{
    label: "Aumentar a energia",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BatteryCharging, { size: 18 })
  }, {
    label: "Melhorar o sono",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 18 })
  }, {
    label: "Reduzir o estresse",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 18 })
  }, {
    label: "Melhorar a postura e a mobilidade",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Move, { size: 18 })
  }, {
    label: "Desenvolver flexibilidade",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18 })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "O que mais você espera alcançar com este plano?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-muted-foreground text-sm", children: "Pode escolher várias opções" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, icon: i.icon, showRadio: true, selected: selected.includes(i.label), onClick: () => onToggle(i.label) }, i.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, disabled: selected.length === 0, children: "Continuar" }) })
  ] });
}
function StepConcerns({
  selected,
  onToggle,
  wholeBody,
  onToggleWhole,
  onNext
}) {
  const items = [{
    label: "Queixo duplo",
    thumb: thumbChin
  }, {
    label: "Braços flácidos",
    thumb: thumbArms
  }, {
    label: "Seios caídos",
    thumb: thumbChest
  }, {
    label: "Gordura da barriga",
    thumb: thumbBelly
  }, {
    label: "Gordura nos joelhos",
    thumb: thumbKnees
  }, {
    label: "Traseiro de alforje",
    thumb: thumbSaddlebags
  }, {
    label: "Nádegas flácidas",
    thumb: thumbGlutes
  }, {
    label: "Parte interna da coxa",
    thumb: thumbThighs
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "Quais são as zonas que mais a preocupam?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-muted-foreground text-sm", children: "Por favor, selecione todas as opções aplicáveis" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onToggleWhole, className: `relative w-12 h-7 rounded-full transition ${wholeBody ? "bg-primary" : "bg-border"}`, "aria-pressed": wholeBody, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition ${wholeBody ? "translate-x-5" : ""}` }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Melhorar o corpo inteiro" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, thumb: i.thumb, showRadio: true, selected: wholeBody || selected.includes(i.label), onClick: () => !wholeBody && onToggle(i.label) }, i.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, disabled: !wholeBody && selected.length === 0, children: "Próximo passo" }) })
  ] });
}
function StepTargets({
  selected,
  onToggle,
  onNext
}) {
  const items = [{
    label: "Barriga",
    thumb: thumbAbs
  }, {
    label: "Bunda",
    thumb: thumbButt
  }, {
    label: "Pernas",
    thumb: thumbLegs
  }, {
    label: "Peito",
    thumb: thumbPecs
  }, {
    label: "Braços",
    thumb: thumbBiceps
  }, {
    label: "Costas",
    thumb: thumbBack
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "Quais são as suas zonas alvo?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-muted-foreground text-sm", children: "Escolha todas as opções aplicáveis" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, thumb: i.thumb, showRadio: true, selected: selected.includes(i.label), onClick: () => onToggle(i.label) }, i.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, disabled: selected.length === 0, children: "Próximo passo" }) })
  ] });
}
function StepPromise({
  onNext
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto w-full px-6 py-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: womanOk, alt: "", loading: "lazy", className: "rounded-3xl w-full object-cover aspect-square max-w-sm mx-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-8 text-2xl font-extrabold text-foreground leading-snug", children: [
      "Apenas 7 minutos por dia — transformarão seu corpo e",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "destravarão o seu metabolismo" }),
      " sem o esforço exaustivo da academia!"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: "O Protocolo de Calistenia Asiática utiliza ativações de fibras profundas para derreter a gordura acumulada e chapar a barriga, agindo onde os exercícios comuns de academia não conseguem chegar, de forma simples e definitiva..." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "Continuar" }) })
  ] });
}
function StepBodyNow({
  onPick
}) {
  const items = [{
    label: "Magra",
    img: bodySlim
  }, {
    label: "Falsa Magra",
    img: bodySkinnyfat
  }, {
    label: "Acima do peso",
    img: bodyOverweight
  }, {
    label: "Sobrepeso",
    img: bodyPlus
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "Como você descreveria o seu corpo atualmente?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-4", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onPick(i.label), className: "bg-card rounded-3xl p-3 shadow-[0_2px_10px_-4px_oklch(0_0_0/0.08)] hover:shadow-[0_8px_24px_-8px_oklch(0_0_0/0.15)] transition-all hover:-translate-y-0.5 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden rounded-2xl bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: i.img, alt: i.label, loading: "lazy", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 mb-2 font-semibold text-foreground text-sm", children: i.label })
    ] }, i.label)) })
  ] });
}
function StepDreamBody({
  onPick
}) {
  const items = [{
    label: "Curvado",
    thumb: bodyOverweight
  }, {
    label: "Magro",
    thumb: bodySlim
  }, {
    label: "Em forma",
    thumb: bodySkinnyfat
  }, {
    label: "Tonificado",
    thumb: thumbAbs
  }, {
    label: "Estou bem com meu corpo",
    thumb: bodyPlus
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "Qual é o corpo dos seus sonhos?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, thumb: i.thumb, onClick: () => onPick(i.label) }, i.label)) })
  ] });
}
function StepBestShape({
  onPick
}) {
  const options = ["1 a 2 anos atrás", "3 a 5 anos atrás", "Mais de 5 anos atrás", "Nunca"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-6xl mx-auto w-full px-6 pt-8 pb-16 flex-1 flex flex-col md:flex-row items-center md:items-end gap-8 min-h-[640px] md:min-h-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: womanBestshape, alt: "", "aria-hidden": "true", className: "absolute right-[-40px] top-16 h-[78%] max-h-[560px] w-auto object-contain pointer-events-none z-0 md:hidden" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 w-full max-w-xl relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-4xl font-black leading-tight text-center md:text-left text-foreground", children: [
        "Há quanto tempo você estava na",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "melhor forma" }),
        " da sua vida?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3 w-full max-w-[58%] md:max-w-md", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: o, onClick: () => onPick(o), showArrow: true }, o)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-[420px] flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: womanBestshape, alt: "Best shape", width: 420, height: 600, className: "w-full h-auto object-contain" }) })
  ] });
}
function StepDifficulties({
  selected,
  onToggle,
  onNext
}) {
  const items = [{
    label: "Costas sensíveis",
    thumb: painBack
  }, {
    label: "Joelhos sensíveis",
    thumb: painKnee
  }, {
    label: "Quadril sensível",
    thumb: painHip
  }, {
    label: "Ombros e braços",
    thumb: painShoulder
  }, {
    label: "Panturrilhas e tornozelos",
    thumb: painCalf
  }, {
    label: "Nenhuma das opções acima"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: [
      "Você tem dificuldades com algum",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "dos seguintes itens?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-muted-foreground text-sm", children: "Por favor, selecione todas as opções aplicáveis" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, thumb: i.thumb, showRadio: true, selected: selected.includes(i.label), onClick: () => onToggle(i.label) }, i.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, disabled: selected.length === 0, children: "Próximo passo" }) })
  ] });
}
function StepComfort({
  onPick
}) {
  const items = [{
    label: "Sinto dor/Desconforto",
    emoji: "😔"
  }, {
    label: "Sinto alguma dificuldade",
    emoji: "😐"
  }, {
    label: "Sinto-me confortável",
    emoji: "😊"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: [
      "Você se sente confortável ao se",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "exercitar?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl leading-none", children: i.emoji }), onClick: () => onPick(i.label) }, i.label)) })
  ] });
}
function StepCare({
  onNext
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto w-full px-6 py-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: womanOk, alt: "", loading: "lazy", className: "rounded-3xl w-full object-cover aspect-square max-w-sm mx-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-8 text-2xl font-extrabold text-foreground", children: "Nós cuidamos de você!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "A dor não vai te impedir. Adaptaremos seu programa para promover movimentos seguros e suaves." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "Continuar" }) })
  ] });
}
function UnitToggle({
  unit,
  options,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex bg-secondary rounded-full p-1", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onChange(o), className: cn("px-5 py-1.5 rounded-full text-sm font-semibold transition", unit === o ? "bg-primary text-white shadow" : "text-muted-foreground"), children: o }, o)) });
}
function RulerSlider({
  value,
  min,
  max,
  onChange
}) {
  const TICK_PX = 10;
  const dragRef = reactExports.useRef(null);
  const dragState = reactExports.useRef(null);
  const ticks = reactExports.useMemo(() => {
    const arr = [];
    for (let i = min; i <= max; i++) arr.push(i);
    return arr;
  }, [min, max]);
  const offset = (min - value) * TICK_PX;
  const clamp = (nextValue) => Math.min(max, Math.max(min, nextValue));
  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = {
      startX: event.clientX,
      startValue: value
    };
  };
  const handlePointerMove = (event) => {
    if (event.buttons !== 1 || !dragState.current) return;
    const deltaX = event.clientX - dragState.current.startX;
    const nextValue = clamp(Math.round(dragState.current.startValue - deltaX / TICK_PX));
    onChange(nextValue);
  };
  const handlePointerUp = (event) => {
    event.currentTarget.releasePointerCapture(event.pointerId);
    dragState.current = null;
  };
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      onChange(clamp(value + 1));
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      onChange(clamp(value - 1));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6 select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-0 h-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 flex items-start", style: {
        transform: `translateX(${offset}px)`
      }, children: ticks.map((t) => {
        const isMajor = t % 10 === 0;
        const isMid = t % 5 === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          width: TICK_PX
        }, className: "flex flex-col items-center flex-shrink-0 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("w-px bg-border", isMajor ? "h-7" : isMid ? "h-5" : "h-3") }),
          isMajor && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-9 text-[11px] font-medium text-muted-foreground/85", children: t })
        ] }, t);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-16 bg-primary z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto w-0 h-0 border-l-[7px] border-r-[7px] border-b-[9px] border-l-transparent border-r-transparent border-b-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 bottom-0 h-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: dragRef, role: "slider", tabIndex: 0, "aria-label": "ajustar valor", "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": value, onPointerDown: handlePointerDown, onPointerMove: handlePointerMove, onPointerUp: handlePointerUp, onPointerCancel: handlePointerUp, onKeyDown: handleKeyDown, className: "absolute inset-0 cursor-ew-resize outline-none touch-none" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-center text-xs text-muted-foreground/70", children: "Arraste para ajustar" })
  ] });
}
function StepHeight({
  value,
  onChange,
  onNext
}) {
  const [unit, setUnit] = reactExports.useState("cm");
  const display = unit === "cm" ? value : Math.round(value / 2.54);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto w-full px-6 py-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-foreground", children: "Qual é a sua altura?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UnitToggle, { unit, options: ["cm", "pol"], onChange: setUnit }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl font-black text-foreground", children: display }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-muted-foreground ml-1", children: unit })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RulerSlider, { value, min: 140, max: 200, onChange }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 bg-card rounded-xl p-3 flex items-center gap-3 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-primary-soft text-primary flex items-center justify-center text-xs font-bold flex-shrink-0", children: "i" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Calculando seu IMC" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "Próximo passo" }) })
  ] });
}
function bmiCategory(bmi) {
  if (bmi < 18.5) return {
    label: "abaixo do peso",
    color: "text-blue-500",
    msg: "Considere ganhar massa muscular com uma dieta equilibrada."
  };
  if (bmi < 25) return {
    label: "saudável",
    color: "text-green-600",
    msg: "Continue mantendo seus hábitos saudáveis!"
  };
  if (bmi < 30) return {
    label: "sobrepeso",
    color: "text-orange-500",
    msg: "Mantenha-se positivo e concentre-se em uma dieta equilibrada e exercícios."
  };
  return {
    label: "obesidade",
    color: "text-red-500",
    msg: "Concentre-se em mudanças graduais de hábitos e exercícios consistentes."
  };
}
function StepWeight({
  value,
  onChange,
  heightCm,
  onNext
}) {
  const [unit, setUnit] = reactExports.useState("kg");
  const display = unit === "kg" ? value : Math.round(value * 2.205);
  const bmi = value / (heightCm / 100) ** 2;
  const cat = bmiCategory(bmi);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto w-full px-6 py-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-foreground", children: "Qual é o seu peso agora?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UnitToggle, { unit, options: ["kg", "Libra"], onChange: setUnit }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl font-black text-foreground", children: display }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-muted-foreground ml-1", children: unit })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RulerSlider, { value, min: 40, max: 150, onChange }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 bg-card rounded-xl p-4 text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
        "Seu IMC é ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: bmi.toFixed(2) }),
        ", que é considerado",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: cat.color, children: cat.label }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: cat.msg })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "Próximo passo" }) })
  ] });
}
function StepTargetWeight({
  value,
  onChange,
  onNext
}) {
  const [unit, setUnit] = reactExports.useState("kg");
  const display = unit === "kg" ? value : Math.round(value * 2.205);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto w-full px-6 py-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-foreground", children: "Qual é o seu peso alvo?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UnitToggle, { unit, options: ["kg", "Libra"], onChange: setUnit }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl font-black text-foreground", children: display }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-muted-foreground ml-1", children: unit })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RulerSlider, { value, min: 40, max: 120, onChange }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "Próximo passo" }) })
  ] });
}
function StepAgeInput({
  value,
  onChange,
  onNext
}) {
  const valid = Number(value) >= 10 && Number(value) <= 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto w-full px-6 py-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-foreground", children: "Qual é a sua idade?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", inputMode: "numeric", value, onChange: (e) => onChange(e.target.value), placeholder: "Digite sua idade", className: "mt-8 w-full rounded-full border border-border bg-background px-6 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 bg-card rounded-xl p-4 text-left flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full bg-primary-soft text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 14 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Perguntamos sua idade para personalizar seu plano" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "As pessoas mais velhas têm um percentual de gordura corporal mais alto do que as pessoas mais jovens com o mesmo IMC." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, disabled: !valid, children: "Próximo passo" }) })
  ] });
}
function StepFinal({
  answers: _answers
}) {
  const REVEAL_AFTER = 330;
  const COUNTDOWN_SECS = 8 * 60;
  const [unlocked, setUnlocked] = reactExports.useState(false);
  const [waitLeft, setWaitLeft] = reactExports.useState(REVEAL_AFTER);
  const [offerLeft, setOfferLeft] = reactExports.useState(COUNTDOWN_SECS);
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const planDate = useTargetDate(21);
  const today = reactExports.useMemo(() => {
    const d = /* @__PURE__ */ new Date();
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  }, []);
  reactExports.useEffect(() => {
    const start = Date.now();
    const t = setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1e3);
      if (elapsed >= REVEAL_AFTER) {
        setUnlocked(true);
        clearInterval(t);
      }
      setWaitLeft(Math.max(0, REVEAL_AFTER - elapsed));
    }, 1e3);
    return () => clearInterval(t);
  }, []);
  reactExports.useEffect(() => {
    if (!unlocked) return;
    const t = setInterval(() => {
      setOfferLeft((s) => s > 0 ? s - 1 : 0);
    }, 1e3);
    return () => clearInterval(t);
  }, [unlocked]);
  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  const testimonials = [{
    img: beatrizImg,
    name: "Beatriz: -3kg e Corpo Tonificado em 21 dias",
    text: "“Eu não estava muito acima do peso, mas meu corpo não tinha forma nenhuma e eu me sentia 'mole'. Com a Calistenia Asiática, a ativação das fibras profundas esculpiu meu corpo. Em 21 dias, perdi 3kg de gordura e minha barriga ficou durinha. Meu corpo finalmente ganhou desenho e me sinto muito mais firme e segura.”"
  }, {
    img: carlaImg,
    name: "Carla: -13kg em 21 dias",
    text: "“Eu estava perdida, sem energia e com muita vergonha do meu corpo. Achava que precisaria de horas na academia, mas a Calistenia Asiática mudou tudo. Redescobri minha força treinando no meu próprio quarto. Hoje me sinto empoderada, confiante e 13kg mais leve em apenas 3 semanas. Foi a melhor decisão que tomei!”"
  }, {
    img: fernandaImg,
    name: "Fernanda: -4kg em 14 dias",
    text: "“Sempre fui desconfiada com promessas rápidas, mas as fotos não mentem. Em apenas duas semanas, a ativação das fibras profundas 'sugou' minha barriga por dentro de um jeito que abdominal nenhum fez. Perdi 4kg muito rápido e o inchaço sumiu. Se em 14 dias estou assim, imagina no final do protocolo!”"
  }, {
    img: julianaImg,
    name: "Juliana: -8kg em 21 dias (Mãe de 2 filhos)",
    text: "“Depois da gravidez, essa 'pochete' não saía por nada e minha postura estava horrível. Os movimentos suaves da Calistenia Asiática foram a minha salvação. Recuperei minha postura e eliminei 8kg em 21 dias. Finalmente estou vendo minha barriga ficar retinha de novo, sem precisar de impacto.”"
  }];
  const benefits = [{
    title: "Ativação das Fibras Profundas:",
    text: "o segredo asiático para destravar o metabolismo e queimar gordura de verdade, sem precisar se matar na academia."
  }, {
    title: `Cronograma "Barriga Chapada" em 21 Dias:`,
    text: `um passo a passo diário e direto ao ponto para você saber exatamente o que fazer até o dia ${planDate}.`
  }, {
    title: "Guia de Alimentação Metabólica:",
    text: "receitas práticas e gostosas para acelerar a queima de gordura enquanto você descansa."
  }, {
    title: "Recuperação e Alívio Articular:",
    text: "exercícios suaves e sem impacto feitos para fortalecer suas articulações e eliminar dores enquanto você elimina peso."
  }, {
    title: "Explosão de Vitalidade:",
    text: "técnicas de ativação que combatem o cansaço constante e devolvem sua disposição logo nos primeiros dias."
  }];
  const bonuses = [{
    n: "1.",
    title: "Chá Asiático Anticelulite",
    text: "Misture uma planta pouco conhecida com água morna para assistir às celulites sumindo dia após dia."
  }, {
    n: "2.",
    title: "Dieta 100% Personalizada",
    text: "Você terá acesso a diversas receitas para preparar e ver a gordura indo embora muito mais rápido."
  }, {
    n: "3.",
    title: "Cronograma de Alimentação Inteligente",
    text: "O passo a passo completo para manter seu metabolismo acelerado e sua reeducação alimentar."
  }, {
    n: "4.",
    title: "Suporte 24h Todos os Dias",
    text: "Nosso time estará pronto para te ajudar com qualquer dúvida, independente do horário."
  }];
  const faqs = [{
    q: "Quais exercícios a Calistenia inclui?",
    a: "Movimentos suaves e de baixo impacto que ativam as fibras profundas: alongamentos dinâmicos, ativação pélvica, agachamentos guiados, pranchas adaptadas e respiração consciente. Tudo feito em casa, sem academia."
  }, {
    q: "Como vou descobrir qual programa é ideal para mim?",
    a: "Seu plano já foi montado com base nas respostas do teste — peso atual, objetivo, idade e rotina. Ao acessar, você verá o cronograma diário pronto para começar."
  }, {
    q: "Como posso acessar meu plano?",
    a: "Após a compra, você recebe acesso imediato por e-mail. É só clicar no link e seu programa estará liberado em qualquer dispositivo (celular, tablet ou computador)."
  }];
  const Cta = ({
    label = "Obter meu plano personalizado agora"
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
    const url = new URL("https://pay.cakto.com.br/xtsj5ap_905938");
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.forEach((value, key) => {
      url.searchParams.set(key, value);
    });
    window.location.href = url.toString();
  }, className: "w-full rounded-2xl bg-primary text-white font-bold py-4 px-6 shadow-[0_10px_30px_-12px_oklch(0.62_0.19_5/0.6)] hover:brightness-105 active:scale-[0.99] transition outline outline-2 outline-offset-2 outline-primary/20", children: label });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    unlocked && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-20 bg-primary text-white text-sm font-semibold py-2 px-4 text-center", children: [
      "Oferta expira em: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono tabular-nums ml-1", children: fmt(offerLeft) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-5 pt-8 pb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-center text-2xl md:text-3xl font-extrabold text-primary leading-tight", children: [
        "Seu plano de Calistenia",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Asiática está pronto!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-muted-foreground", children: "Assista ao vídeo abaixo para entender como funciona…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 relative rounded-2xl overflow-hidden bg-black aspect-[9/14] shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { className: "w-full h-full object-cover", controls: true, autoPlay: true, playsInline: true, preload: "metadata", src: "/videos/programa-calistenia.mp4" }) }),
      unlocked && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-8 animate-in fade-in duration-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cta, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-sm font-semibold text-primary flex items-center justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 16 }),
          " Restam apenas 6 vagas"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border border-border rounded-2xl p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center font-bold text-foreground", children: "O que você vai receber" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-4", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12, strokeWidth: 3 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: b.title }),
              " ",
              b.text
            ] })
          ] }, b.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: appMockup, alt: "", className: "mt-6 w-full h-auto", loading: "lazy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border-2 border-primary/30 rounded-2xl p-6 text-center shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-primary flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 16 }),
            " Restam apenas 6 vagas"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-muted-foreground", children: [
            "De ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-through", children: "R$297,00" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-end justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-lg", children: "por" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-extrabold text-5xl leading-none", children: "R$37,90" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-primary font-semibold text-sm", children: [
            "Desconto válido apenas hoje, ",
            today
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-muted-foreground", children: "Pagamento único · Acesso completo ao programa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-xs text-muted-foreground flex items-center justify-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 12 }),
            " Compra 100% Segura · 30 Dias de Garantia Incondicional"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cta, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center font-bold text-foreground", children: "Resultados que nos deixam orgulhosos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-5", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-card border border-border rounded-2xl overflow-hidden shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, className: "w-full h-auto", loading: "lazy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-primary", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: t.text })
            ] })
          ] }, t.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cta, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border border-border rounded-2xl p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-center font-bold text-foreground", children: "+Bônus Exclusivos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-sm text-muted-foreground", children: "Além de você ter acesso às aulas e ao seu plano personalizado, separamos diversos bônus para te ajudar a acelerar o seu processo de emagrecimento rápido:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-4", children: bonuses.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-primary text-sm", children: [
            b.n,
            " ",
            b.title,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal", children: [
              " - ",
              b.text
            ] })
          ] }) }, b.n)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border border-border rounded-2xl p-6 text-center shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: garantiaImg, alt: "Garantia 30 dias", className: "w-24 h-24 mx-auto object-contain", loading: "lazy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-bold text-foreground", children: "30 Dias de Garantia Incondicional" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Nós confiamos tanto nos resultados do Protocolo de Calistenia Asiática que o risco é todo nosso." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Você tem 30 dias inteiros para testar o aplicativo e todos os bônus. Se por qualquer motivo você não estiver 100% satisfeita, nós devolveremos todo o seu investimento." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm font-bold text-foreground", children: "Reembolso total e imediato, sem perguntas e sem complicações." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Perguntas frequentes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-2", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-full overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(openFaq === i ? null : i), className: "w-full px-5 py-3 flex items-center justify-between text-left text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 18, className: cn("transition", openFaq === i && "rotate-180") })
            ] }),
            openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-4 text-sm text-muted-foreground", children: f.a })
          ] }, f.q)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cta, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-xs text-muted-foreground pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "underline", children: "Termos de Serviço" }),
          " e",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "underline", children: "Política de Privacidade" })
        ] })
      ] })
    ] })
  ] });
}
function SideImageLayout({
  title,
  highlight,
  image,
  bgGray,
  mobileImageClassName,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative max-w-6xl mx-auto w-full px-6 pt-8 pb-16 flex-1 flex flex-col md:flex-row items-center md:items-end gap-8 min-h-[600px] md:min-h-0 overflow-hidden", bgGray && "md:rounded-3xl md:my-6 md:bg-secondary/40"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", "aria-hidden": "true", loading: "lazy", className: cn("absolute right-[-18px] bottom-0 h-[58%] max-h-[380px] w-auto object-contain pointer-events-none z-0 md:hidden", mobileImageClassName) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 w-full max-w-xl relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl md:text-2xl font-extrabold text-center md:text-left text-foreground", children: [
        title,
        highlight && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
          " ",
          highlight
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 w-full max-w-[52%] md:max-w-md space-y-3", children })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-[340px] flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: "", loading: "lazy", className: "w-full h-auto object-contain" }) })
  ] });
}
function StepTypicalDay({
  onPick
}) {
  const items = [{
    label: "Sedentário",
    description: "Eu passo a maior parte do dia sentado",
    thumb: daySedentary
  }, {
    label: "Atividade moderada",
    description: "Eu faço pausas ativas",
    thumb: dayModerate
  }, {
    label: "Eu sou imparável",
    description: "Estou de pé o dia todo",
    thumb: dayActive
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "Como você descreveria seu dia típico?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, description: i.description, thumb: i.thumb, thumbShape: "square", onClick: () => onPick(i.label) }, i.label)) })
  ] });
}
function StepEnergy({
  onPick
}) {
  const options = ["Baixo, sinto-me cansada durante todo o dia", "Queda pós-almoço", "Arrastando antes das refeições", "Alto e estável"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "Como estão seus níveis de energia durante o dia?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: o, onClick: () => onPick(o) }, o)) })
  ] });
}
function StepWater({
  onPick
}) {
  const options = ["Eu só tomo café ou chá", "Cerca de 2 copos (0,5 L)", "2 a 6 copos (0,5–1,5 L)", "Mais de 6 copos"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SideImageLayout, { title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Quanto de ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "água" }),
    " você bebe diariamente?"
  ] }), image: womanWater, mobileImageClassName: "right-[-8px] h-[62%] max-h-[420px]", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: o, onClick: () => onPick(o) }, o)) });
}
function StepSleep({
  onPick
}) {
  const options = ["Menos de 5 horas", "5–6 horas", "7–8 horas", "Mais de 8 horas"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SideImageLayout, { title: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Quantas horas você costuma dormir?" }), image: womanSleep, bgGray: true, mobileImageClassName: "right-[-10px] h-[60%] max-h-[410px]", children: options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: o, onClick: () => onPick(o) }, o)) });
}
function StepMealPrefs({
  selected,
  onToggle,
  onNext
}) {
  const items = [{
    label: "Eu sou vegetariana",
    description: "Verduras, grãos, mas sem carne animal",
    thumb: mealVegetarian
  }, {
    label: "Eu sou vegana",
    description: "Puramente à base de plantas, sem produtos de origem animal",
    thumb: mealVegan
  }, {
    label: "Não contém glúten",
    description: "Exclua produtos de grãos que contenham glúten",
    thumb: mealGlutenfree
  }, {
    label: "Sem lactose",
    description: "Excluir produtos lácteos",
    thumb: mealLactosefree
  }, {
    label: "Sem restrições",
    description: "Aberto a todos os alimentos",
    thumb: mealNorestrictions
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "Quais são suas preferências de refeição?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, description: i.description, thumb: i.thumb, thumbShape: "square", showRadio: true, selected: selected.includes(i.label), onClick: () => onToggle(i.label) }, i.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, disabled: selected.length === 0, children: "Continuar" }) })
  ] });
}
function StepHabits({
  selected,
  onToggle,
  onNext
}) {
  const items = [{
    label: "Procrastinação",
    emoji: "⏰"
  }, {
    label: "Alimentação pouco saudável",
    emoji: "🍔"
  }, {
    label: "Mídias sociais",
    emoji: "📱"
  }, {
    label: "Beber muita cafeína",
    emoji: "☕"
  }, {
    label: "Maratona de séries",
    emoji: "📺"
  }, {
    label: "Dúvida sobre si mesmo",
    emoji: "💭"
  }, {
    label: "Roer as unhas",
    emoji: "✋"
  }, {
    label: "Estar atrasada",
    emoji: "⏳"
  }, {
    label: "Fumar",
    emoji: "🚬"
  }, {
    label: "Beber álcool",
    emoji: "🍷"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "Quais desses hábitos você tem?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl leading-none", children: i.emoji }), showRadio: true, selected: selected.includes(i.label), onClick: () => onToggle(i.label) }, i.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, disabled: selected.length === 0, children: "Continuar" }) })
  ] });
}
function StepWeightEvents({
  selected,
  onToggle,
  onNext
}) {
  const items = [{
    label: "Casamento ou relacionamento",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18 })
  }, {
    label: "Gravidez",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18 })
  }, {
    label: "Trabalho agitado ou vida familiar",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 18 })
  }, {
    label: "Estresse ou saúde mental",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 18 })
  }, {
    label: "Medicamento ou distúrbio hormonal",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { size: 18 })
  }, {
    label: "Nenhuma das acima",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "Algum dos eventos abaixo te levou a ganhar peso nos últimos anos?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, icon: i.icon, showRadio: true, selected: selected.includes(i.label), onClick: () => onToggle(i.label) }, i.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, disabled: selected.length === 0, children: "Continuar" }) })
  ] });
}
function StepRecover({
  onNext
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto w-full px-6 py-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: womanRecover, alt: "", loading: "lazy", className: "rounded-3xl w-full object-cover aspect-[4/3] bg-secondary/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-8 text-3xl font-extrabold text-foreground", children: "Recupere Seu Corpo!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: "Não sabe por onde começar? Nós já planejamos tudo. Não tem certeza de que pode fazer isso? Estamos prontos para motivá-la e apoiá-la!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "Continuar" }) })
  ] });
}
function useTargetDate(daysAhead = 21) {
  return reactExports.useMemo(() => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() + daysAhead);
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    return `${d.getDate()} de ${meses[d.getMonth()]}`;
  }, [daysAhead]);
}
function StepTransformLife({
  onNext
}) {
  const LINE_LEN = 260;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto w-full px-6 py-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes tl-draw { from { stroke-dashoffset: ${LINE_LEN}; } to { stroke-dashoffset: 0; } }
        @keyframes tl-reveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
        @keyframes tl-pop { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.15); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes tl-fade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        .tl-line { stroke-dasharray: ${LINE_LEN}; stroke-dashoffset: ${LINE_LEN}; animation: tl-draw 1.6s ease-out 0.3s forwards; }
        .tl-area { animation: tl-reveal 1.6s ease-out 0.3s both; }
        .tl-dot { transform-origin: center; transform-box: fill-box; opacity: 0; animation: tl-pop 0.45s cubic-bezier(.34,1.56,.64,1) forwards; }
        .tl-label { opacity: 0; animation: tl-fade 0.5s ease-out forwards; }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-extrabold text-foreground leading-tight", children: [
      "É assim que a",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "transformação da sua vida" }),
      " ",
      "se parece"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm", children: "Com base nas suas respostas, prevemos que você está entre as mulheres com mais chances de atingir seus objetivos!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 relative h-[260px] w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 360 240", className: "w-full h-full", preserveAspectRatio: "none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "greenFill", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#22c55e", stopOpacity: "0.35" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#22c55e", stopOpacity: "0.05" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "redFill", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ef4444", stopOpacity: "0.25" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#ef4444", stopOpacity: "0.05" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "80", y1: "20", x2: "80", y2: "200", stroke: "#cbd5e1", strokeDasharray: "4 4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "tl-area", d: "M80,120 L320,40 L320,200 L80,200 Z", fill: "url(#greenFill)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "tl-area", d: "M80,120 L320,170 L320,200 L80,200 Z", fill: "url(#redFill)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { className: "tl-line", x1: "80", y1: "120", x2: "320", y2: "40", stroke: "#22c55e", strokeWidth: "3", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { className: "tl-line", x1: "80", y1: "120", x2: "320", y2: "170", stroke: "#ef4444", strokeWidth: "3", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "tl-dot", style: {
          animationDelay: "0.1s"
        }, cx: "80", cy: "120", r: "6", fill: "#ef4444" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "tl-dot", style: {
          animationDelay: "1.7s"
        }, cx: "320", cy: "40", r: "6", fill: "#22c55e" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "tl-dot", style: {
          animationDelay: "1.7s"
        }, cx: "320", cy: "170", r: "6", fill: "#ef4444" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute tl-label", style: {
        left: "calc(80/360*100% - 28px)",
        top: "calc(120/240*100% - 36px)",
        animationDelay: "0.2s"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-white border border-border rounded-full px-3 py-1 text-xs font-semibold shadow", children: "Você" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute tl-label", style: {
        left: "calc(320/360*100% - 80px)",
        top: "calc(40/240*100% - 16px)",
        animationDelay: "1.8s"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-green-500 text-white rounded-full px-3 py-1 text-xs font-semibold shadow", children: "Com Calistenia Asiática" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute tl-label", style: {
        left: "calc(320/360*100% - 70px)",
        top: "calc(170/240*100% - 14px)",
        animationDelay: "1.8s"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-red-500 text-white rounded-full px-3 py-1 text-xs font-semibold shadow", children: "Sem mudanças" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "Continuar" }) })
  ] });
}
function StepBuildingPlan({
  onDone
}) {
  const [pct, setPct] = reactExports.useState(0);
  const slides = [transformation1, transformation2, transformation3];
  const [slide, setSlide] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const startedAt = Date.now();
    const total = 6e3;
    const id = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const next = Math.min(100, Math.round(elapsed / total * 100));
      setPct(next);
      if (next >= 100) {
        clearInterval(id);
        setTimeout(onDone, 400);
      }
    }, 60);
    return () => clearInterval(id);
  }, [onDone]);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, 1800);
    return () => clearInterval(id);
  }, [slides.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto w-full px-6 py-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-foreground leading-tight", children: "Aguarde, estamos criando seu plano personalizado" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary transition-all duration-150", style: {
        width: `${pct}%`
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm font-semibold text-muted-foreground", children: [
        pct,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 relative aspect-[3/4] w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden bg-secondary/40", children: slides.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: cn("absolute inset-0 w-full h-full object-cover transition-opacity duration-700", i === slide ? "opacity-100" : "opacity-0") }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "Resultados reais de usuárias do programa." })
  ] });
}
function StepWeightProjection({
  weightKg,
  targetKg,
  onNext
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg mx-auto w-full px-6 py-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-extrabold text-foreground leading-tight", children: "O último plano que você precisará para ficar em forma" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm", children: "Prevemos que você estará com" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-lg font-bold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg", children: [
        targetKg,
        "kg"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground text-sm font-semibold", children: "em até 21 dias" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 relative h-[220px] w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
          @keyframes wp-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
          @keyframes wp-reveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
          @keyframes wp-pop { 0% { transform: scale(0); opacity: 0; } 70% { transform: scale(1.15); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
          @keyframes wp-fade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
          .wp-line { stroke-dasharray: 1; stroke-dashoffset: 1; animation: wp-draw 2s ease-out 0.3s forwards; }
          .wp-area { animation: wp-reveal 2s ease-out 0.3s both; }
          .wp-dot { transform-origin: center; transform-box: fill-box; opacity: 0; animation: wp-pop 0.45s cubic-bezier(.34,1.56,.64,1) forwards; }
          .wp-label { opacity: 0; animation: wp-fade 0.5s ease-out forwards; }
        ` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 360 220", className: "w-full h-full", preserveAspectRatio: "none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "weightGrad", x1: "0", x2: "1", y1: "0", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ef4444", stopOpacity: "0.6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#fbbf24", stopOpacity: "0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#22c55e", stopOpacity: "0.5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "weightLine", x1: "0", x2: "1", y1: "0", y2: "0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ef4444" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#f59e0b" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#22c55e" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "wp-area", d: "M50,40 Q150,90 180,130 T320,170 L320,200 L50,200 Z", fill: "url(#weightGrad)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { className: "wp-line", pathLength: 1, d: "M50,40 Q150,90 180,130 T320,170", stroke: "url(#weightLine)", strokeWidth: "3", strokeLinecap: "round", fill: "none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "180", y1: "40", x2: "180", y2: "130", stroke: "#cbd5e1", strokeDasharray: "4 4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "wp-dot", style: {
          animationDelay: "0.2s"
        }, cx: "50", cy: "40", r: "6", fill: "#ef4444" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "wp-dot", style: {
          animationDelay: "1.2s"
        }, cx: "180", cy: "130", r: "6", fill: "#f59e0b" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "wp-dot", style: {
          animationDelay: "2.2s"
        }, cx: "320", cy: "170", r: "6", fill: "#22c55e" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute wp-label", style: {
        left: "calc(50/360*100% - 22px)",
        top: "calc(40/220*100% - 30px)",
        animationDelay: "0.3s"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block bg-red-500 text-white rounded-md px-2 py-0.5 text-xs font-bold shadow", children: [
        weightKg,
        "kg"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute wp-label", style: {
        left: "calc(180/360*100% - 38px)",
        top: "calc(130/220*100% - 30px)",
        animationDelay: "1.3s"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-white border border-border rounded-md px-2 py-0.5 text-xs font-semibold text-blue-700 shadow", children: "Semana 2" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute wp-label", style: {
        left: "calc(320/360*100% - 50px)",
        top: "calc(170/220*100% - 14px)",
        animationDelay: "2.3s"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block bg-green-500 text-white rounded-md px-2 py-0.5 text-xs font-bold shadow", children: [
        targetKg,
        "kg"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-lg font-extrabold text-primary", children: "Protocolo de 21 dias quase pronto!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "De acordo com as suas respostas, você está pronta para ter resultados em 21 dias com o nosso programa." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "Continuar" }) })
  ] });
}
function StepProfileReady({
  heightCm,
  weightKg,
  onNext
}) {
  const bmi = reactExports.useMemo(() => {
    const h = heightCm / 100;
    return Math.round(weightKg / (h * h) * 10) / 10;
  }, [heightCm, weightKg]);
  const pct = Math.max(0, Math.min(100, (bmi - 15) / (40 - 15) * 100));
  const category = bmi < 18.5 ? "Abaixo do peso" : bmi < 25 ? "Normal" : bmi < 30 ? "Sobrepeso" : "Obeso";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "Seu perfil está pronto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 bg-card rounded-2xl shadow-[0_2px_10px_-4px_oklch(0_0_0/0.08)] p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
          @keyframes bmi-slide { from { left: 0%; } to { left: var(--bmi-pct); } }
          @keyframes bmi-fade { from { opacity: 0; } to { opacity: 1; } }
          .bmi-marker { animation: bmi-slide 1.6s cubic-bezier(.5,.05,.2,1) 0.2s both; }
          .bmi-label { animation: bmi-slide 1.6s cubic-bezier(.5,.05,.2,1) 0.2s both, bmi-fade 0.4s ease-out 0.2s both; }
        ` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Índice de Massa Corporal (IMC)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 relative", style: {
        "--bmi-pct": `${pct}%`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-8 -translate-x-1/2 z-10 bmi-label", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-foreground text-background text-xs font-bold rounded px-2 py-1 whitespace-nowrap", children: [
          "Você – ",
          bmi
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mb-1 px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "18,5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "25" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "40" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full relative", style: {
          background: "linear-gradient(90deg,#3b82f6 0%,#22c55e 30%,#fbbf24 60%,#ef4444 100%)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-foreground bmi-marker" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] font-semibold text-muted-foreground mt-2 px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ABAIXO DO PESO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "NORMAL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "SOBREPESO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "OBESO" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-primary/5 border border-primary/30 rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 16 }),
        " Alerta de Estagnação:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-primary/90 leading-relaxed", children: [
        'Cuidado com o efeito "falsa magra". Seu peso está ',
        category.toLowerCase(),
        ", mas seu metabolismo está estagnado. Sem a ativação das fibras profundas, o corpo acumula gordura visceral e perde a definição. Você precisa destravar sua queima natural agora para evitar a flacidez e o envelhecimento metabólico."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-card rounded-2xl shadow-[0_2px_10px_-4px_oklch(0_0_0/0.08)] divide-y divide-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { size: 18 }), label: "Estilo de vida", value: "Moderado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 18 }), label: "Nível de condicionamento", value: "Iniciante" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 18 }), label: "Metabolismo", value: "Preguiçoso, tendência à flacidez" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "Continuar" }) })
  ] });
}
function ProfileRow({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: value })
    ] })
  ] });
}
function StepMainMotivation({
  onPick
}) {
  const items = [{
    label: "Me sentir mais confiante com o meu corpo.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18 })
  }, {
    label: "Ficar mais saudável e ter mais energia.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 18 })
  }, {
    label: "Me sentir bem nas minhas roupas.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shirt, { size: 18 })
  }, {
    label: "Recuperar o corpo e a autoestima após o parto.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Baby, { size: 18 })
  }, {
    label: "Outro.",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 18 })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-extrabold text-center text-foreground", children: "Qual é o seu principal motivo para transformar o seu corpo?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, icon: i.icon, showArrow: true, onClick: () => onPick(i.label) }, i.label)) })
  ] });
}
function StepConfidence({
  onPick
}) {
  const date = useTargetDate(21);
  const items = [{
    label: "Eu sei que consigo!",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 18 })
  }, {
    label: "Estou disposta a tentar algo novo!",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18 })
  }, {
    label: "Ainda sinto insegurança, mas quero mudar!",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18 })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-extrabold text-center text-foreground leading-tight", children: [
      "Quão confiante você está em entrar em forma até o dia",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: date }),
      "?"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OptionCard, { label: i.label, icon: i.icon, showArrow: true, onClick: () => onPick(i.label) }, i.label)) })
  ] });
}
function StepPlanReady({
  weightKg,
  targetKg,
  onNext
}) {
  const date = useTargetDate(21);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto w-full px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-extrabold text-center text-foreground leading-tight", children: [
      "Seu plano de Calistenia Asiática Atlas está",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Quase" }),
      " pronto!"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 bg-card rounded-2xl shadow-[0_2px_10px_-4px_oklch(0_0_0/0.08)] p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_auto_1fr] items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-2", children: "Agora" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bodySkinnyfat, alt: "", className: "rounded-xl w-full aspect-[3/4] object-cover" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary mb-2", children: "Seu objetivo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bodySlim, alt: "", className: "rounded-xl w-full aspect-[3/4] object-cover" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-2 gap-4 text-left border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Peso atual" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-foreground", children: [
            weightKg,
            " kg"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary", children: "Peso desejado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-extrabold text-primary", children: [
            targetKg,
            " kg"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Gordura corporal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: "Acima do normal" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary", children: "Gordura corporal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: "Normal" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Nível de treino de calistenia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: "Iniciante" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 flex-1 bg-primary rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 flex-1 bg-secondary rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 flex-1 bg-secondary rounded-full" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary", children: "Nível de treino de calistenia" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: "Avançado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 flex-1 bg-primary rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 flex-1 bg-primary rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 flex-1 bg-primary rounded-full" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 18, className: "text-primary mt-0.5 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-primary", children: "Foco do Protocolo:" }),
        " Vitalidade máxima e fim do cansaço metabólico."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 bg-primary/5 border border-primary/20 rounded-2xl p-4 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 18, className: "text-primary mt-0.5 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
        "O Protocolo foi ajustado para garantir sua constância. Você atingirá o pico de queima metabólica até o dia ",
        date,
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 bg-secondary/40 border border-border rounded-2xl p-4 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 18, className: "text-amber-500 mt-0.5 flex-shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground text-center w-full", children: [
        "Método ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "sem impacto" }),
        " — seguro para qualquer idade e condição física"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { onClick: onNext, children: "CONTINUAR" }) })
  ] });
}
export {
  QuizPage as component
};
