import nodemailer from "nodemailer";

export async function post({ request }) {
  console.log("Recibida solicitud POST");
  try {
    const data = await request.json();
    console.log("Datos recibidos:", data);

    // Configura el transporter de nodemailer
    let transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: "test@sonussystems.com",
        pass: "test@sonussystems.com",
      },
    });

    // Envía el email
    let info = await transporter.sendMail({
      from: '"Tesr" <test@sonussystems.com>',
      to: "mauriquiroga97@gmail.com",
      subject: "Nuevo mensaje de contacto",
      text: `Nombre: ${data.name}\nEmail: ${data.email}\nMensaje: ${data.message}`,
      html: `<p><strong>Nombre:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Mensaje:</strong> ${data.message}</p>`,
    });
    console.log("Email enviado con éxito");
    return new Response(
      JSON.stringify({ message: "Email enviado con éxito" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(
      JSON.stringify({
        message: "Error al enviar el email",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
