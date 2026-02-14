export default function PublicBusinessPage({ params }: { params: { username: string; slug: string } }) {
  return <div className='container-shell'><section className='panel'><h1 className='text-3xl font-bold'>{params.username} / {params.slug}</h1><p className='mt-2 text-slate-300'>Rendered by schema, no custom HTML execution.</p></section></div>;
}
