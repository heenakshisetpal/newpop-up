import { LightningElement,api } from 'lwc';
import saveFile from '@salesforce/apex/testcontroller.saveFile';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import project__c from '@salesforce/schema/project__c';
import Project_name__c from '@salesforce/schema/project__c.Project_name__c';
import Project_type__c from '@salesforce/schema/project__c.Project_type__c';
import status__c from '@salesforce/schema/project__c.status__c';
import Priority__c from '@salesforce/schema/project__c.Priority__c';
import End_date__c from '@salesforce/schema/project__c.End_date__c';
import owner__c from '@salesforce/schema/project__c.owner__c';
export default class ProjectUpload extends LightningElement {
    @api myRecordId;
    
    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
        this.template.querySelector('lightning-record-edit-form').submit(this.fields);
      
    }
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
    saveAndNewClick(event) {
        this.template.querySelector('lightning-record-edit-form').submit(this.fields);
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
       
    }
    
    
    handleCancel(event){
        var url = window.location.href; 


        var value = url.substr(0,url.lastIndexOf('/') + 1);


        window.history.back();


        return false;


}

    get acceptedFormats() {
        return ['.pdf', '.png','.jpg','.jpeg'];
    }
    handleUploadFinished(event) {
        const uploadedFiles = event.detail.files;
        alert("No. of files uploaded : " + uploadedFiles.length);
     
        
    }
}