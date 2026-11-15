import React, { useEffect, useState } from 'react';
import {
  CheckSquare,
  Square,
  ShieldAlert,
  RotateCcw,
  ClipboardCheck,
  Sparkles,
} from 'lucide-react';
import { Language } from '../data/campaignConstants';

interface OwnerDecisionPanelProps {
  lang: Language;
}

interface DecisionItem {
  id: string;
  label: string;
  labelFr: string;
  detail: string;
  detailFr: string;
}

const DECISION_ITEMS: DecisionItem[] = [
  {
    id: 'concept',
    label: 'Campaign Concept ("BUY ONE. GIVE ONE.")',
    labelFr: 'Concept de campagne (« BUY ONE. GIVE ONE. »)',
    detail: 'Confirm customer-pays-for-two framing and "SPREAD THE MOOD." bilingual rollout.',
    detailFr: 'Valider le modèle « deux shawarmas achetés » et le déploiement bilingue.',
  },
  {
    id: 'locations',
    label: 'Participating Restaurant Locations (1 Flagship vs. All 8)',
    labelFr: 'Succursales participantes (1 phare vs les 8)',
    detail: 'Decide between Centre-Ville Montréal pilot or full QC/ON 8-location participation.',
    detailFr: 'Choisir entre un pilote au Centre-Ville ou les 8 succursales QC/ON.',
  },
  {
    id: 'budget',
    label: 'Campaign Budget & Promo Pricing',
    labelFr: 'Budget de campagne & prix promotionnel',
    detail: 'Confirm December bundle price, print/signage allowance, and POS tracking setup.',
    detailFr: 'Confirmer le prix du duo de décembre et le budget d’affichage en comptoir.',
  },
  {
    id: 'capacity',
    label: 'Meal Capacity (1,000 Initial / 2,000 Stretch)',
    labelFr: 'Capacité cuisine (1 000 initial / 2 000 max)',
    detail: 'Verify prep blocks, protein/pita inventory, and insulated carrier count for Dec 23.',
    detailFr: 'Valider les quarts de préparation, les stocks et les caissons isothermes.',
  },
  {
    id: 'partner',
    label: 'Distribution Partner (Vetted Montréal / Local Nonprofit)',
    labelFr: 'Partenaire de distribution (OSBL vérifié)',
    detail: 'Select and sign formal intake agreement with shelter or community food partner.',
    detailFr: 'Sélectionner et signer l’entente avec un organisme communautaire vérifié.',
  },
  {
    id: 'match',
    label: '$1 Contribution Commitment ($1,000 Cap at 1,000 Meals)',
    labelFr: 'Engagement de 1 $ par repas (plafond 1 000 $)',
    detail: 'Approve separate community fund ledger for +$1 per verified donated shawarma.',
    detailFr: 'Approuver le fonds communautaire distinct de 1 $ par repas vérifié.',
  },
  {
    id: 'marketing',
    label: 'Marketing Plan (4:5 Posters, Reels & Voluntary Creators)',
    labelFr: 'Plan marketing (Affiches 4:5, Reels & créateurs)',
    detail: 'Approve bilingual FR-over-EN assets and consent-first creator guidelines.',
    detailFr: 'Approuver les visuels FR/EN et les lignes directrices éthiques pour créateurs.',
  },
  {
    id: 'production',
    label: 'Production Schedule (Nov Prep → Dec 23 Delivery)',
    labelFr: 'Calendrier de production (Nov → 23 déc)',
    detail: 'Greenlight November video/photo shoot and December 1 proposed launch window.',
    detailFr: 'Autoriser le tournage de novembre et le lancement proposé le 1er décembre.',
  },
];

const STORAGE_KEY = 'shawarma_moods_owner_review_draft_v1';

export const OwnerDecisionPanel: React.FC<OwnerDecisionPanelProps> = ({ lang }) => {
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
    } catch {
      // ignore storage errors in restricted environments
    }
  }, [checkedIds]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetNotes = () => setCheckedIds([]);
  const progressPct = Math.round((checkedIds.length / DECISION_ITEMS.length) * 100);

  return (
    <section
      id="section-15"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#EAAA2F] mb-3">
          <ClipboardCheck className="w-4 h-4" />
          {lang === 'fr' ? '15 · Décision de la Direction' : '15 · Owner Decision & Next Steps'}
        </span>
        <h2 className="font-headline text-5xl sm:text-7xl uppercase tracking-tight text-white leading-none">
          {lang === 'fr'
            ? 'FAISONS DE CE NOËL UN MOMENT QUI COMPTE.'
            : "LET'S MAKE THIS CHRISTMAS MEAN MORE."}
        </h2>
        <p className="text-zinc-400 mt-4 text-sm sm:text-base leading-relaxed">
          {lang === 'fr'
            ? 'Liste de vérification interactive pour la rencontre de direction. Les cases cochées sont enregistrées localement dans votre navigateur comme notes de révision — elles ne constituent pas une approbation officielle.'
            : 'Interactive meeting review checklist for Shawarma Moods ownership. Selections are saved locally in this browser as review notes only and do not publish or commit any live campaign.'}
        </p>
      </div>

      {/* Review Status Bar */}
      <div className="max-w-4xl mx-auto mb-6 p-4 rounded-2xl bg-[#141416] border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-full bg-[#FBCE22]/15 border border-[#FBCE22]/40 text-[#FBCE22] text-[10px] font-mono uppercase tracking-wider">
            Local Review Draft · Not Official Approval
          </span>
          <span className="text-xs font-mono text-zinc-300">
            {checkedIds.length} / {DECISION_ITEMS.length} reviewed ({progressPct}%)
          </span>
        </div>

        <button
          type="button"
          onClick={resetNotes}
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Review Notes</span>
        </button>
      </div>

      {/* 8 Approval Checkboxes */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
        {DECISION_ITEMS.map((item) => {
          const checked = checkedIds.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                checked
                  ? 'bg-[#EAAA2F]/10 border-[#EAAA2F]'
                  : 'bg-[#141416] border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {checked ? (
                <CheckSquare className="w-5 h-5 text-[#EAAA2F] shrink-0 mt-0.5" />
              ) : (
                <Square className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
              )}
              <div>
                <div className="text-sm font-semibold text-white">
                  {lang === 'fr' ? item.labelFr : item.label}
                </div>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {lang === 'fr' ? item.detailFr : item.detail}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Final Sign-off / Brand Closing Banner */}
      <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-[#161618] via-[#0B0B0C] to-[#161618] border border-[#EAAA2F]/40 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#EAAA2F]">
          <Sparkles className="w-4 h-4" />
          <span>Christmas 2026 · Private Owner Proposal</span>
        </div>
        <div className="font-headline text-4xl sm:text-6xl text-white uppercase tracking-wide">
          BUY ONE. GIVE ONE.
        </div>
        <div className="font-headline text-2xl sm:text-3xl text-[#EAAA2F] uppercase tracking-[0.18em]">
          SPREAD THE MOOD.
        </div>
        <div className="pt-2 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <ShieldAlert className="w-4 h-4 text-[#EAAA2F] shrink-0" />
          <span>
            Conceptual business pitch only. No public claims, payments, or partner commitments are active.
          </span>
        </div>
      </div>
    </section>
  );
};
