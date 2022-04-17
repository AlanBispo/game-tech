import { Link } from "react-router-dom"

import './styles.css'

const Elipse = () => {
    return(
        <div className="elipse">
          <div className="text-elipse">
            <h3>Cansado de preços abusivos? Confira nossos jogos e cupons!</h3>
            <Link to="/shop">
              <button type="button" className="btn-main">
                Ver produtos
              </button>
            </Link>
          </div>
        </div>
    )
}

export default Elipse