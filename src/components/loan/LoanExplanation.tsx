interface Props {
title: string
paragraphs: string[]
}

export default function LoanExplanation({title, paragraphs}:Props){

return(

<section className="mt-10 bg-white p-10 rounded-3xl border border-gray-100">

<h2 className="text-2xl font-bold mb-6">
{title}
</h2>

<div className="space-y-6 text-gray-600 leading-relaxed">

{paragraphs.map((p,i)=>(

<p key={i}>
{p}
</p>

))}

</div>

</section>

)

}