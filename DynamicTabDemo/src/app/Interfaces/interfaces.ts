import { ComponentRef, ViewRef } from "@angular/core";

export interface ITab{
    UniqueCode: string;
    headerName: string;
    content: ComponentRef<any>;
    view: ViewRef;
}

export interface ITabComponent{
    IsActive: boolean;
    CanClose(): boolean;
}