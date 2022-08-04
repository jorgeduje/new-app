// ** Icons Import
import { Heart } from "react-feather"

const Footer = () => {
  return (
    <p className="clearfix mb-0">
      <span className="float-md-start d-block d-md-inline-block mt-25">
        COPYRIGHT © {new Date().getFullYear()}{" "}
          
        <span className="d-none d-sm-inline-block">Jorge Duje</span>
      </span>
      <span className="float-md-end d-none d-md-block">
        Aca otra descripcion
        <Heart size={14} />
      </span>
    </p>
  )
}

export default Footer
