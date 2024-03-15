/// <reference types="dom-chromium-installation-events" />
import { LitElement, PropertyValues } from 'lit';
import { IRelatedApp, PWAInstallAttributes } from './types/types';
export declare class PWAInstallElement extends LitElement {
    manifestUrl: string;
    icon: string;
    name: string;
    description: string;
    installDescription: string;
    disableDescription: boolean;
    disableScreenshots: boolean;
    manualApple: boolean;
    manualChrome: boolean;
    disableChrome: boolean;
    static get styles(): CSSStyleSheet[];
    externalPromptEvent: BeforeInstallPromptEvent | null;
    protected platforms: BeforeInstallPromptEvent['platforms'];
    protected userChoiceResult: string;
    protected isDialogHidden: boolean;
    protected isInstallAvailable: boolean;
    protected isAppleMobilePlatform: boolean;
    protected isAppleDesktopPlatform: boolean;
    protected isUnderStandaloneMode: boolean;
    protected isRelatedAppsInstalled: boolean;
    private _manifest;
    private _howToRequested;
    private _galleryRequested;
    private _install;
    install: () => void;
    installEv: {
        handleEvent: () => void;
        passive: boolean;
    };
    private _hideDialog;
    private _hideDialogUser;
    hideDialog: () => void;
    showDialog: (forced?: boolean) => void;
    getInstalledRelatedApps: () => Promise<IRelatedApp[]>;
    private _howToForApple;
    private _toggleGallery;
    private _checkInstalled;
    private _init;
    private _requestUpdate;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
export { PWAInstallAttributes };
