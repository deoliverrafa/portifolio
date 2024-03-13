import profile from "../assets/imagem.jpeg";
import gitIcon from "../assets/github.png";
import instaIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Main() {
    return (

        <main className="apresentacao flex-col">
            <section className="apresentacao__conteudo flex justify-center items-center">

                <div className="flex flex-col gap-10">
                    <h1 className="apresentacao__conteudo__titulo">Eleve seu negócio digital a outro nível<strong
                        className="titulo-destaque">com um Front-end de qualidade!
                    </strong></h1>
                    <p className="apresentacao__conteudo__texto">Olá! Sou Rafael Martins, desenvolvedor
                        Full-Stack com especialidade em React, TypeScript Node.JS
                        MongoDB, Postgree.... Ajudo pequenos negócios e designers a
                        colocarem em prática boas ideias. Vamos
                        conversar?</p>
                </div>

                <div className="flex flex-row w-full h-2/4">
                    <img src={profile} className="profile-image rounded-lg w-2/4 h-2/4" />
                </div>
                
                <div className="apresentacao__links">
                    <h2 className="apresentacao__links__subtitulo">Acesse minhas redes</h2>
                    <a className="apresentacao__links__link" href="https://github.com/deoliverrafa">
                        <img src={gitIcon} />
                        Github
                    </a>
                    <a className="apresentacao__links__link" href="https://www.linkedin.com/in/rafael-de-oliveira-martins-886156286/">
                        <img src={linkedinIcon} />
                        linkedin
                    </a>
                    <a className="apresentacao__links__link" href="https://www.instagram.com/deoliverrafa/">
                        <img src={instaIcon} />
                        Instagram
                    </a>
                </div>
            </section>
        </main>
    )
}