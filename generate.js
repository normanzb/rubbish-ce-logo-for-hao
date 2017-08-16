'use strict';
const UIPrompt = require('huntun/src/Prompt');
const UILabel = require('huntun/src/Label');
const UITextField = require('huntun/src/fields/Text');
const UICheckBoxField = require('huntun/src/fields/CheckBox');
const UIButton = require('huntun/src/Button');

var divControl = document.querySelector('.controls');
var frame = document.querySelector('.bar-codes > iframe');
var prompt = new UIPrompt({
    fields: [
        new UILabel({
            text: 'Click to generate the stupid bar code'
        }),
        new UITextField({
            name: 'content',
            label: 'Text to convert to barcode'
        }),
        new UICheckBoxField({
            name: 'has-warning',
            label: 'Has warning?'
        }),
        new UIButton({
            text: 'Submit',
            events: {
                onClick: function(){
                    var value = prompt.value;
                    frame.contentWindow.render(value);
                    prompt.hide();
                }
            }
        })
    ]
});
prompt.mount(document.body);
prompt.hide();

var btnSettings = new UIButton({
    text: 'Settings'
});
btnSettings.onClick = function() {
    prompt.show();
};
btnSettings.mount(divControl);

var btnPrint = new UIButton({
    text: 'Print'
});
btnPrint.onClick = function() {
    frame.contentWindow.print();
};
btnPrint.mount(divControl);