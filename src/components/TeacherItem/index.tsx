import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/48895781?s=460&u=3f0ea38aba31c0dc930157cf9375a58991694a19&v=4" alt="Samuel Souza" />
                <div>
                    <strong>Samuel Souza</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Louco das conta.
                    </p>

            <footer>
                <p>
                    Preço por Hora
                            <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem