import "./experienceList.css"

const ExperienceList = () => {
  return (
    <div className="eList">
        <div className="eListItem">
            <img src="https://img.freepik.com/free-photo/close-up-adventure-woman-feet-walk-mountain-path_1150-1947.jpg?w=1060&t=st=1700620797~exp=1700621397~hmac=049de2d29128362634ca44f32a94c43688697cbb8ff1d218f69e3f2b17ae5b12" alt="" className="eListImg" />
            <div className="eListTitles">
                <h1>Senderismo</h1>
                <h2>Descripcion</h2>
            </div>
        </div>
        <div className="eListItem">
            <img src="https://img.freepik.com/free-photo/man-side-road-enjoying-landscape_23-2148232265.jpg?w=1060&t=st=1700620814~exp=1700621414~hmac=465ada691bc60dacfc92acddb1008efc4ee2f41163253f3705493498f92a1a0d" alt="" className="eListImg"/>
            <div className="eListTitles">
                <h1>En carro</h1>
                <h2>Descripcion</h2>
            </div>
        </div>
        <div className="eListItem">
            <img src="https://img.freepik.com/free-photo/sailing-ship-glides-into-sunset-excitement-abounds-generated-by-ai_188544-11936.jpg?t=st=1700620840~exp=1700624440~hmac=3ac31780799170a2e1208921089384bca1e7f011642e9e28e825c0e59b8b0621&w=1380" alt="" className="eListImg" />
            <div className="eListTitles">
                <h1>En bote</h1>
                <h2>Descripcion</h2>
            </div>
        </div>
        <div className="eListItem">
            <img src="https://img.freepik.com/free-photo/hiker-stand-camping-front-orange-tent-backpack-mountains_1150-9163.jpg?size=626&ext=jpg&ga=GA1.1.1015084916.1700618474&semt=sph" alt="" className="eListImg" />
            <div className="eListTitles">
                <h1>Acampar</h1>
                <h2>Descripcion</h2>
            </div>
        </div>
    </div>
  )
}

export default ExperienceList