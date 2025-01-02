import Link from 'next/link';

export default async function Accfb() {

  let data = await fetch('https://apifb.myad-dev.com/cart')
  let products = await data.json()
  
  return (
    <>

<div className="container">
  {products.map((product) => (
    <div key={product.id} className="homebox">
      <div className="box">
        <div className="boximg">
          <img 
            src="/img/fblogo.png" 
            width={100} 
            className="img-fluid rounded-start" 
            alt="fblogo"
          />
        </div>
        <div className="boxx text-center">
          <div className="title h2">{product.titel}</div>
          <div className="name h4">{product.name}</div>
        </div>
        <div className="btns">
          <Link className="btn btn-info" href={`https://lin.ee/B9MKeh0C`}>ตกลง</Link>
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
}
