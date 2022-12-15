import { Helmet } from "react-helmet";

export function Privacidad() {
    return (
        <section className='container'>
            <Helmet>
                <title>🔐 Privacidad | Llantera Garcia</title>
                <meta name='description' content='Terminos de privacidad de Llantera Garcia' />
            </Helmet>
            <h2 className='title'>🔐 Privacidad</h2>

            <div className='containerPage'>
                <p className='paragrath'>El sitio web Llantera Garcia es propiedad de Llantera Garcia, que es un controlador de datos de tus datos personales.</p>
                <p className='paragrath'>Hemos adoptado esta Política de privacidad, que determina cómo procesamos la información recopilada por Llantera Garcia, que también proporciona las razones por las que debemos recopilar ciertos datos personales sobre ti. Por lo tanto, debes leer esta Política de privacidad antes de usar el sitio web de Llantera Garcia.</p>
                <p className='paragrath'>Cuidamos tus datos personales y nos comprometemos a garantizar su confidencialidad y seguridad.</p>
                <p className='paragrahtTitle'>Información personal que recopilamos:</p>
                <p className='paragrath'>Cuando visitas Llantera Garcia, recopilamos automáticamente cierta información sobre tu dispositivo, incluida información sobre tu navegador web, dirección IP, zona horaria y algunas de las cookies instaladas en tu dispositivo. Además, a medida que navegas por el sitio, recopilamos información sobre las páginas web individuales o los productos que ves, qué sitios web o términos de búsqueda te remitieron al sitio y cómo interactúas con él. Nos referimos a esta información recopilada automáticamente como "Información del dispositivo". Además, podemos recopilar los datos personales que nos proporcionas (incluidos, entre otros, nombre, apellido, dirección, información de pago, etc.) durante el registro para poder cumplir con el acuerdo.</p>
                <p className='paragrahtTitle'>¿Por qué procesamos tus datos?</p>
                <p className='paragrath'>Nuestra máxima prioridad es la seguridad de los datos del cliente y, como tal, podemos procesar solo los datos mínimos del usuario, solo en la medida en que sea absolutamente necesario para mantener el sitio web. La información recopilada automáticamente se utiliza solo para identificar casos potenciales de abuso y establecer información estadística sobre el uso del sitio web. Esta información estadística no se agrega de tal manera que identifique a ningún usuario en particular del sistema.</p>
                <p className='paragrath'>Puedes visitar el sitio sin decirnos quién eres ni revelar ninguna información por la cual alguien pueda identificarte como una persona específica. Sin embargo, si deseas utilizar algunas de las funciones del sitio web, o deseas recibir nuestro boletín informativo o proporcionar otros detalles al completar un formulario, puedes proporcionarnos datos personales, como tu correo electrónico, nombre, apellido, ciudad de residencia, organización y número de teléfono. Puedes optar por no proporcionar tus datos personales, pero es posible que no puedas aprovechar algunas de las funciones del sitio web. Por ejemplo, no podrás recibir nuestro boletín ni contactarnos directamente desde el sitio web. Los usuarios que no estén seguros de qué información es obligatoria pueden ponerse en contacto con nosotros a través de contacto@llanteragarcia.com.</p>
                <p className='paragrahtTitle'>Tus derechos:</p>
                <p className='paragrath'>Si eres residente europeo, tienes los siguientes derechos relacionados con tus datos personales:</p>

                <ul>
                    <li className='paragrath paragrathList'>-El derecho a ser informado.</li>
                    <li className='paragrath paragrathList'>-El derecho de acceso.</li>
                    <li className='paragrath paragrathList'>-El derecho a la rectificación.</li>
                    <li className='paragrath paragrathList'>-El derecho a borrar.</li>
                    <li className='paragrath paragrathList'>-El derecho a restringir el procesamiento.</li>
                    <li className='paragrath paragrathList'>-El derecho a la portabilidad de datos.</li>
                    <li className='paragrath paragrathList'>-El derecho a oponerte.</li>
                    <li className='paragrath paragrathList'>-Derechos en relación con la toma de decisiones automatizada y la elaboración de perfiles.</li>
                    <li className='paragrath paragrathList'>-Si deseas ejercer este derecho, comunícate con nosotros a través de la información de contacto a continuación</li>
                </ul>

                <p className='paragrath'>Además, si eres residente europeo, destacamos que estamos procesando tu información para cumplir con los contratos que podríamos tener contigo (por ejemplo, si realizas un pedido a través del sitio), o de otra manera para seguir nuestros intereses comerciales legítimos enumerados anteriormente. Además, ten en cuenta que tu información puede transferirse fuera de Europa, incluidos Canadá y Estados Unidos.</p>
                <p className='paragrahtTitle'>Enlaces a otros sitios web:</p>
                <p className='paragrath'>Nuestro sitio puede contener enlaces a otros sitios web que no son de nuestra propiedad ni están controlados por nosotros. Ten en cuenta que no somos responsables de dichos sitios web ni de las prácticas de privacidad de terceros. Te recomendamos que estés atento cuando abandones nuestro sitio web y leas las declaraciones de privacidad de cada sitio que pueda recopilar información personal.</p>
                <p className='paragrahtTitle'>Seguridad de la información:</p>
                <p className='paragrath'>Aseguramos la información que proporcionas en servidores informáticos en un entorno controlado y seguro, protegido del acceso, uso o divulgación no autorizados. Mantenemos medidas de seguridad administrativas, técnicas y físicas razonables para proteger contra el acceso no autorizado, el uso, la modificación y la divulgación de datos personales bajo su control y custodia. Sin embargo, no se puede garantizar la transmisión de datos a través de Internet o redes inalámbricas.</p>
                <p className='paragrahtTitle'>Divulgación legal:</p>
                <p className='paragrath'>Divulgaremos cualquier información que recopilemos, usemos o recibamos si así lo requiere o lo permite la ley, como para cumplir con una citación o un proceso legal similar, y cuando creemos de buena fe que la divulgación es necesaria para proteger nuestros derechos, proteger tu seguridad o la seguridad de los demás, investigar el fraude o responder a una solicitud del gobierno.</p>
                <p className='paragrahtTitle'>Información de contacto:</p>
                <p className='paragrath'>Si deseas comunicarte con nosotros para comprender más sobre esta Política o deseas comunicarte con nosotros en relación con cualquier asunto sobre los derechos individuales y tu información personal, puedes enviarnos un correo electrónico a contacto@llanteragarcia.com.</p>
                
            </div>

        </section>
    )
}