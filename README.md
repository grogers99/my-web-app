# My Web App and Work Examples

This project contains work examples and a simple front-end web application built with HTML, CSS, and JavaScript. It serves as a container for my html pages (eg. my html-version CV) and markdown text.

## Anonymised examples of BPMN modelling

### FTTH Order Fulfillment Process Description

[Open BPMN model in Camunda Modeler](https://modeler.camunda.io/share/0634a762-bc18-47ab-8a02-82d3b5f0c27e)

Models order entry and fulfillment processes for FTTH (fibre-to-the-home) Broadband Internet products of a communications provider based on Deutsche Telekom (DTAG) infrastructure. Such processes may have a long duration, as for the Not Connected case (ie. product is ordered in a neighbourhood where fibre construction is not yet started/complete) order fulfillment may last many months or up to a year and a half. The process differentiates among the phases of order entry, not connected, connected and service activation. Communication with the infrastructure provider (DTAG) is by means of standardized messages as per the WITA specification.

### Glossary – FTTH Terms

| Term                        | Meaning |
|-----------------------------|---------|
| **Alter Standard**          | (Eng: *Old Standard*) Certain formats of Home-Id imply that the fibre socket connection is of type 'old standard', meaning that an engineer visit is required to upgrade the socket before use. See also `63A_FTTH | Home-Id Validation and Alter Standard`. |
| **Bulk**                    | Within the replica file, certain addresses/building parts will be marked as Bulk to indicate they are part of a planned bulk agreement for connectivity. Such addresses will follow the Not Connected process though they will be priced as Not Connected offers. See also `63B_FTTH | Bulk`. |
| **Building Part**           | (DE: *Gebäudeteil*) some (not all!) properties will, according to the DTAG address data (ie. replica file), be listed as having multiple building parts e.g. front building, rear building, etc. In such case each building part may have its own expansion status, which may differ from that held at the level of the address e.g. FTTH may be planned for the front building, but unplanned for the rear building due to the difficulties of extending connectivity throughout the property. |
| **Connected Order**         | Order for provisioning and activation of FTTH product once physical FTTH infrastructure already exists (typically DTAG *prepared, ready* or *connected* statuses). |
| **Connectivity Order**      | See **Not Connected Order**. |
| **DTAG**                    | Deutsche Telekom AG. |
| **Eigentümer**              | (Eng: *Property Owner*) see **Property Owner Relationship**. |
| **Eigentümerzustimmung**    | (Eng: *Property Owner Agreement*) here: attribute in replica file indicating the status of the property owner agreement (e.g. agreed, rejected, etc.). |
| **Einzelhaus**              | (Eng: *Single House*) i.e. only one Building Part exists for the property. |
| **Expansion Status**        | (DE: *Ausbaustatus*) DTAG status of FTTH network expansion at a particular address/building part. See also `62_FTTH | Expansion Status and Order Status`. |
| **Fibre Outlet**            | Physical socket which is FTTH endpoint in customer premises. |
| **FTTH**                    | Fibre To The Home. |
| **Gebäudeart**              | (Eng: *Type of Building*) e.g. detached house, apartment building, etc. Relevant for UGG. |
| **Gebäudeteil**             | See **Building Part**. |
| **GFTA**                    | See **Glasfaser-Teilnehmeranschluss**. |
| **Glasfaser**               | (Eng: *Optical Fibre*). |
| **Glasfaser-Dose**          | Customer-friendly term for **GFTA**. |
| **Glasfaser-ID**            | Customer-friendly term for **Home-Id**. |
| **Glasfaser-Teilnehmeranschluss** | Fibre outlet (i.e. FTTH endpoint in customer premises). |
| **Home-Id**                 | Nationwide unique identifier for physical access point to optical fibre network (*6 alphanumeric char + 1 check char*). See also `63A_FTTH | Home-Id Validation and Alter Standard`. |
| **Mieter**                  | (Eng: *Tenant*) see **Property Owner Relationship**. |
| **Not Connected Order**     | Order to physically connect customer premises to optical fibre network (aka. *Connectivity Order*). |
| **ONKZ**                    | Ortsnetzkennzahl (Eng: *Area Code*) i.e. prefix for local area on fixed line network. |
| **ONKZ Grösse**             | (Eng: *Area Code Size*) area codes fall into different size ranges, and this size plays a role in the calculation of recurring charges for FTTH products (*regio uplift*). |
| **ONT**                     | Optical Network Terminal – equipment required at the customer premises which converts between the optical fibre signal and the ethernet used in the home network. |
| **ONT ID**                  | Serial no. of ONT. ETU-standard: 12 char (4 ASCII & 8 HEX) or 16 char (16 HEX). |
| **Property Owner Relationship** | At any given address the customer (i.e. the individual placing the order) may or may not be the owner of the property. The relationship of the customer to the property may be one of the following three types:<br>• **Eigentümer** (*Property Owner*)<br>• **Teileigentümer** (*Part-Property Owner*)<br>• **Mieter** (*Tenant*)<br><br>Extension of the FTTH network into the home will require the Property Owner's permission before any construction work can be planned and carried out. If the customer is of type *Mieter* or *Teileigentümer*, TEF is responsible for collecting the actual Property Owner's contact details and passing these on to DTAG so this permission can be sought. |
| **TAE**                     | *Teilnehmeranschlusseinheit* – connection socket in customer premises. Generic term across different technologies. |
| **Teileigentümer**          | (Eng: *Part-Owner*) see **Property Owner Relationship**. |
| **VLT**                     | *Verbindlicher Liefertermin* (i.e. contractual delivery date or activation date). |


# This Web Project Structure

```
my-web-app
├── src
│   ├── index.html        # Main entry point of the web application
│   ├── about.html        # About page with information about the application
│   ├── scripts
│   │   └── main.js       # Main JavaScript file for functionality
│   └── styles
│       └── style.css     # CSS file for styling the application
└── README.md             # Documentation for the project
```

