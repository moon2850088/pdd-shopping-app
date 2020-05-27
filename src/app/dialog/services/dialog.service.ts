import { Injectable, Inject, Type } from '@angular/core';
import { DomService, ChildConfig } from './dom.service';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root'})
export class DialogService {
    
    constructor(private domService: DomService, @Inject(DOCUMENT) private document: Document){
    }

    private readonly dialogElementId = 'dialog-container';
    private readonly overlayElementId = 'overlay';
    private data$ = new BehaviorSubject<object | null>(null);
    
    open(component: Type<any>, childConfig: ChildConfig){
        this.domService.appendComponentTo(this.dialogElementId, component, childConfig);
        if(childConfig.position){
            const element = this.document.getElementById(this.dialogElementId);
            element.style.top = childConfig.position.top;
            element.style.left = childConfig.position.left;
            element.style.width = childConfig.position.width;
            element.style.height = childConfig.position.height;
        }
        this.toggleAll();
        this.data$.next(null);
    }
    close(){
        this.domService.removeComponent();
        this.toggleAll();
    }

    private toggleAll() {
        this.toggleVisibility(this.document.getElementById(this.dialogElementId));
        this.toggleVisibility(this.document.getElementById(this.overlayElementId));
    }

    getData() {
        return this.data$.asObservable();
    }
    saveData(val: object | null) {
        this.data$.next(val);
    }
    private toggleVisibility(element) {
        if (element.classList.contains('show')){
            element.classList.remove('show');
            element.classList.add('hidden');
            return;
        }

        if (element.classList.contains('hidden')){
            element.classList.remove('hidden');
            element.classList.add('show');
        }
    }


}