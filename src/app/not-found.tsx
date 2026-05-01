import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-dark-900">
      <div className="font-sans font-800 text-[10rem] text-white/5 leading-none select-none">
        404
      </div>
      <div className="-mt-16">
        <h1 className="font-sans font-800 text-4xl text-white mb-4">
          Página não encontrada
        </h1>
        <p className="text-slate-500 font-body mb-8 max-w-sm">
          A página que procura não existe ou foi movida. Volte ao início.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-sans font-600 transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
