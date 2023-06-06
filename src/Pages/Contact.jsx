import React from 'react'
import Navigation from '../Components/Navigation'
import Logo from '../Components/Logo'
import "../Styles/contact.css"
const Contact = () => {
  return (
    <div>
        <Logo/>
        <Navigation/>
        <h1>Contact</h1>
        <form>
            <div>
                <p>Informations Personnelles</p>
                <p>
                    <label for=" name">Nom : </label>
                    <input type="text" id="name" autofocus/>
                </p>
                <p>
                    <label for="prenom">Prénom : </label>
                    <input type="text" id="prenom"/>
                </p>
                <p>
                    <label for="email">E-mail : </label>
                    <input type="email" id="email"/>
                </p>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa aperiam voluptatibus quidem
                        ullam et repellat quibusdam ut odio voluptatum..</small></p>
                <p>
                    <input type="submit" value="Soumettre"/>
                </p>

            </div>
            <div>
                <p>Zone de message</p>
                <textarea name="" id="" cols="10"
                    rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, accusantium?</textarea>
            </div>
        </form>
    </div>
  )
}

export default Contact