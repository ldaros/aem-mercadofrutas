import {
  TouchUIDialogFieldOptions,
  TouchUIDialogTab,
  TouchUIField,
  AEMTouchUIDialog,
} from "@teclead/aem-generator/models";

import { TouchUIXMLGenerator } from "@teclead/aem-generator";

const fields: TouchUIDialogFieldOptions[] = [
  {
    label: "Mein Textfeld",
    type: TouchUIField.Text,
    databaseName: "label",
    isRequired: true,
    description: "Meine Beschreibung für Textfeld...",
  },
  {
    label: "Mein PathField",
    type: TouchUIField.Path,
    databaseName: "path",
    description: "Meine Beschreibung für PathField...",
  },
];

const sightlyTemplate = "<h1>my custom template...</h1>";

const tabs: TouchUIDialogTab[] = [
  { title: "Mein erstes Tab", fields },
  {
    title: "Mein zweites Tab",
    fields: [
      {
        slisightlyTemplate: sightlyTemplate,
        label: "Mein Touch UI Multifield",
        type: TouchUIField.Multifield,
        description: "Meine Beschreibung für das Multifield...",
        databaseName: "multitouchuidatabase",
        multifieldtype: TouchUIField.Text,
      },
    ],
  },
];

export const dialog: AEMTouchUIDialog = {
  componentName: "MyTestComponent",
  componentGroup: "MyTestGroup",
  componentDescription: "MyTestComponentDescription",
  componentPath: "./src/__tests___/results/touchUI",
  tabs,
  resourceSuperType: "core/wcm/components/text/v2/text",
};

new TouchUIXMLGenerator(dialog).writeFilesToAEM();
