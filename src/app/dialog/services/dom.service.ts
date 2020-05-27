import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Inject, EmbeddedViewRef, ComponentRef, Type } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface DialogPos {
    top: string;
    left: string;
    width: string;
    height: string;
}
export interface ChildConfig {
    inputs: object; //非简单类型
    outputs: object;
    position?: DialogPos;
}
@Injectable({providedIn : 'root'})
export class DomService {
    private childComponentRef: ComponentRef<any>;
    constructor(private resolver: ComponentFactoryResolver, //get componmet factory// create the componment
                private appRef: ApplicationRef,     // get angular application reference
                private injector: Injector,         
                @Inject(DOCUMENT) private document: Document){}

    public appendComponentTo(parentId: string, child: Type<any>, ChildConfig: ChildConfig){
        const childComponentRef = this.resolver.resolveComponentFactory(child).create(this.injector);
        this.attachConfig(ChildConfig, childComponentRef);
        this.childComponentRef = childComponentRef;
        this.appRef.attachView(childComponentRef.hostView);
        
        const childDOMElement = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        this.document.getElementById(parentId).appendChild(childDOMElement);
    }

    public attachConfig(config: ChildConfig, componmentRef: ComponentRef<any>) {
        const inputs = config.inputs;
        const outputs = config.outputs;
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                const element = inputs[key];
                componmentRef.instance[key] = element; //替换成我们的设置
            }
        }

        for (const key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                const element = outputs[key];
                componmentRef.instance[key] = element;
                
            }
        }
    }

    public removeComponent() {
        this.appRef.detachView(this.childComponentRef.hostView);
    }
}