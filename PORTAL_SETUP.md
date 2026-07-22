# Activar el área privada

1. Crea un proyecto en [Supabase](https://supabase.com/dashboard).
2. En **SQL Editor**, ejecuta el contenido de `supabase/schema.sql`.
3. Regístrate una vez desde `acceso.html`. Después, en el editor SQL, ejecuta la última instrucción del archivo sustituyendo el correo por el tuyo. Con eso tu perfil pasa a ser administrador.
4. En **Settings > API**, copia la URL del proyecto y la clave **publishable** en `supabase-config.js`. No uses ni publiques una clave `sb_secret` ni `service_role`.
5. Despliega `supabase/functions/admin-invite/index.ts` como la Edge Function llamada `admin-invite`. La función usa la clave segura que Supabase proporciona en su entorno para enviar invitaciones; no hay que añadirla al sitio web.
6. En **Authentication > URL Configuration**, añade `https://mdstudioweb.es/acceso.html` a las URL de redirección permitidas. Si haces pruebas locales, añade también la URL local que uses.
7. Publica los nuevos archivos junto con tu web. Entra en `acceso.html` con tu cuenta de administrador y ya podrás invitar usuarios y asignarles su página de entrada.

Para añadir un proyecto a un cliente, usa la tabla `client_projects` en el editor de tablas de Supabase y selecciona como `owner_id` el identificador del perfil del cliente. El usuario solo podrá ver sus propios proyectos.

La clave publicable puede estar en el navegador. Las claves secretas nunca deben copiarse en HTML, JavaScript ni repositorios públicos.
