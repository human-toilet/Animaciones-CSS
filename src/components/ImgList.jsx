export function ImgList({ imgs }){
  return (
    <section className="columns-2 py-[16px] px-[56px]">
      {imgs.map((src, index) => (
        <img
          className="rounded-[16px] w-[80%] h-auto mb-[32px] animate-img-reveal"
          style={{
            //animationTimeLine: 'view()',
            //animationRange: 'entry 20% cover 30%'
          }}
          key={index}
          src={src}
          alt="Maxi's Photo"
        />
      ))}
    </section>    
  )
}