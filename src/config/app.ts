
const App = {

    /**
      * Determines whether the application is running in development mode.
      *
      * @returns `true` when running with the development server; otherwise `false`.
     */
    get isDevelopment(): boolean {
        return import.meta.env.DEV;
    },

    /**
       * Determines whether the application is running in production mode.
       *
       * @returns `true` when the application is built for production; otherwise `false`.
       */
    get isProduction(): boolean {
        return import.meta.env.PROD;
    },

    /**
     * Gets the Google Tag Manager container ID configured for the current environment.
     *
     * The value is read from the `PUBLIC_GTM_ID` environment variable.
     *
     * @returns The GTM container ID, or `null` when no ID is configured.
     */
    getGtmId(): string | null {
        return import.meta.env.PUBLIC_GTM_ID?.trim() ?? null;
    },
};

export default App;