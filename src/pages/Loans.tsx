import { useParams } from "wouter"
import { useI18n } from "@/lib/i18n-context"
import { loanConfig } from "@/config/loanConfig"

import LoanHero from "@/components/loan/LoanHero"
import LoanStats from "@/components/loan/LoanStats"
import LoanAdvantages from "@/components/loan/LoanAdvantages"
import LoanUsage from "@/components/loan/LoanUsage"
import LoanExample from "@/components/loan/LoanExample"
import LoanSteps from "@/components/loan/LoanSteps"
import LoanTrust from "@/components/loan/LoanTrust"
import LoanFAQ from "@/components/loan/LoanFAQ"
import LoanOtherLoans from "@/components/loan/LoanOtherLoans"
import LoanExplanation from "@/components/loan/LoanExplanation"
import FAQSection from "@/components/home/FAQSection"

import LoanInlineSimulator from "@/components/home/LoanInlineSimulator"

export default function LoanPage(){

  const params = useParams()
  const { t } = useI18n()

  const type = params.type || "personnel"

  const data= loanConfig[type]

  const title = t(`nav.loanTypes.${type}`)

  if(!data){
    return <div className="p-20 text-center">Prêt introuvable</div>
  }

  return(

    <div className="min-h-screen bg-gray-50">

      <LoanHero
        title={title}
        tagline={data.hero.tagline}
        img={data.hero.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">

        <LoanInlineSimulator
          defaultAmount={data.simulation?.defaultAmount}
          defaultDuration={data.simulation?.defaultDuration}
        />

        <LoanStats
          min={data.conditions.min}
          max={data.conditions.max}
          duration={data.conditions.duration}
          taeg={data.conditions.taeg}
          rateType={data.conditions.rateType}
        />

        <LoanAdvantages advantages={data.advantages} />

        <LoanExplanation
          title={data.explanation.title}
          paragraphs={data.explanation.paragraphs}
        />

        <LoanUsage usage={data.usages} />

        <LoanExample/>

        <LoanSteps/>

        <LoanTrust/>

        <LoanOtherLoans current={type}/>

        <FAQSection/>

      </div>

    </div>

  )

}