import { Helmet } from "react-helmet";

export function Refund() {
    return (
        <section className='container'>
            <Helmet>
                <title>📦 Devoluciones | Llantera Garcia</title>
                <meta name='description' content='Terminos de devolucion de Llantera Garcia' />
            </Helmet>
            <h2 className='title'>📦 Devoluciones</h2>
            <div className='containerPage'>
                <p className='paragrahtTitle'>Política de devoluciones y reembolsos:</p>
                <p className='paragrath'>Tienes derecho a cancelar tu pedido dentro de los 30 días sin dar ninguna razón para hacerlo.</p>
                <p className='paragrath'>El plazo para anular un pedido es de 30 días a partir de la fecha en que recibiste la mercancía o en el que un tercero que hayas designado, que no sea el transportista, tome posesión del producto entregado.</p>
                <p className='paragrath'>Para ejercer tu derecho de cancelación, debes informarnos de tu decisión mediante una declaración clara.</p>
                <p className='paragrath'>Puedes informarnos por correo electrónico contacto@llanteragarcia.com</p>
                <p className='paragrath'>Te reembolsaremos a más tardar en 30 días a partir del día en que recibamos los bienes devueltos. Usaremos el mismo medio de pago que utilizaste para el pedido y no incurrirás en ningún cargo por dicho reembolso.</p>
                <p className='paragrahtTitle'>Condiciones para devoluciones:</p>
                <p className='paragrath'>Para que los bienes sean elegibles para una devolución, asegúrate de que:</p>
                <ul>
                    <li className='paragrath paragrathList'>- Los bienes se compraron en los últimos 30 días.</li>
                    <li className='paragrath paragrathList'>- Los bienes están en el embalaje original.</li>
                </ul>
                <p className='paragrahtTitle'>Los siguientes bienes no se pueden devolver:</p>
                <ul>
                    <li className='paragrath paragrathList'>- El suministro de bienes hecho según tus especificaciones o claramente personalizado.</li>
                    <li className='paragrath paragrathList'>- El suministro de bienes que por su naturaleza no son aptos para ser devueltos, por ejemplo bienes que se deterioran rápidamente o cuya fecha de caducidad ha terminado.</li>
                    <li className='paragrath paragrathList'>- El suministro de bienes que no son aptos para devolución por razones de protección de la salud o higiene y que se abrieron después de la entrega.</li>
                    <li className='paragrath paragrathList'>- El suministro de bienes que, después de la entrega, según su naturaleza, se mezclan inseparablemente con otros artículos.</li>
                    <li className='paragrath paragrathList'>- Reservamos el derecho de rechazar devoluciones de cualquier mercancía que no cumpla con las condiciones de devolución anteriores a nuestro exclusivo criterio.</li>
                </ul>
                <p className='paragrahtTitle'>Devolución de bienes</p>
                <p className='paragrath'>Eres responsable del costo y riesgo de devolvernos los bienes. Debes enviar los productos a la siguiente dirección:</p>
                <p className='paragrath'>Av. Juan Pablo II 1616, Jaripillo, 82136 Mazatlán, Sin.</p>
                <p className='paragrath'>No nos hacemos responsables de los bienes dañados o perdidos en el envío de devolución. Por lo tanto, recomendamos un servicio de correo asegurado y rastreable. No podemos emitir un reembolso sin la recepción real de los bienes o la prueba de la devolución recibida.</p>
                <p className='paragrahtTitle'>Regalos:</p>
                <p className='paragrath'>Si los productos se marcaron como regalo cuando se compraron y luego te los enviaron directamente, recibirás un crédito de regalo por el valor de tu devolución. Una vez que se reciba el producto devuelto, se te enviará por correo un certificado de regalo.</p>
                <p className='paragrath'>Si los productos no se marcaron como regalo cuando se compraron, o si el obsequiador se envió el pedido a sí mismo para entregártelo luego, le enviaremos el reembolso al obsequiador.</p>
                <p className='paragrahtTitle'>Contáctanos</p>
                <p className='paragrath'>Si tienes alguna pregunta sobre nuestra Política de devoluciones y reembolsos, comunícate con nosotros por correo electrónico contacto@llanteragarcia.com</p>
            </div>
        </section>
    )
}