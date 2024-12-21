import { useForm } from "react-hook-form";
import emailJs from "@emailjs/browser"
import { contactRef } from "../../refs/refs";

function ContactForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) =>
        emailJs.send(
            // email service key
            'service_l5571sl',
            // msg template key
            'template_tlbdl99',
            {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            },
            // api public key
            'II-rLY53uhsbsF-GW'
        )

    return (
        <section ref={contactRef} id="contact_form">
            <h1>CONTACT ME</h1>
            <article className="content">
                <div className="formInfo">
                    <h3>Grande adaptabilité et toujours prête à relever de nouveaux défis tout en mettant mes capacités à votre service</h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <label htmlFor="name">NOM</label>
                        <input {...register("name", { required: "Le nom est obligatoire." })} type="name" className="name" id="name" />
                        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">E-MAIL</label>
                        <input {...register("email", { required: "L'e-mail est obligatoire." })} type="email" className="email" id="email" />
                        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset>
                        <label htmlFor="subject">SUJET DE L'E-MAIL</label>
                        <input {...register("subject")} type="text" className="subject" id="subject" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="text">MESSAGE</label>
                        <textarea {...register("text")} className="text" id="text" placeholder="Écrivez votre message ici..." />
                        {errors.text && <p style={{ color: "red" }}>{errors.text.message}</p>}
                    </fieldset>
                    <button type="submit" >ENVOYER</button>
                </form>
            </article>

        </section>
    )
}

export default ContactForm;