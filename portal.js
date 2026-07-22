(function () {
  const url = window.MD_SUPABASE_URL;
  const key = window.MD_SUPABASE_PUBLISHABLE_KEY;
  const configured = url && key && !url.includes('TU-PROYECTO') && !key.includes('TU_CLAVE');

  window.mdPortal = {
    configured,
    client: configured ? window.supabase.createClient(url, key) : null,
    message(element, text, isError) {
      if (!element) return;
      element.textContent = text;
      element.classList.toggle('form-note--error', Boolean(isError));
    },
    async profile(userId) {
      const { data, error } = await this.client.from('profiles').select('*').eq('id', userId).single();
      if (error) throw error;
      return data;
    },
    async requireUser() {
      if (!this.configured) throw new Error('Falta configurar Supabase en supabase-config.js.');
      const { data: { user } } = await this.client.auth.getUser();
      if (!user) {
        window.location.replace('acceso.html');
        return null;
      }
      return user;
    },
    async signOut() {
      await this.client.auth.signOut();
      window.location.replace('acceso.html');
    }
  };
})();
