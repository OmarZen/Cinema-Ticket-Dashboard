# Responsive Ticket Management Page - Frontend Developer Assessment

This repository contains the solution for a Frontend Developer assessment task provided by A Technologies. The project is built using Angular Framework and follows the provided Figma design to create a responsive web page for managing ticket sales. The main features include an interactive chart, a dynamic table with sorting, copy functionality, QR code generation, and file download capabilities.

## Task Overview

The assignment was to design and develop a single responsive web page that integrates the following:

### Design Integration:
- Follow the provided Figma design for accuracy in UI implementation.
- Focus on maintaining **font sizes**, **margins**, and **paddings** as outlined in the design.

### Main Features:
1. **Echarts Integration**: A dynamic line chart implemented using the Echarts library, styled to match the design closely.
2. **Copy Functionality**: Implement a copy-to-clipboard feature when pressing the copy icon next to a text field.
3. **QR Code Generation**: Generate a QR code dynamically using an Angular QR code library.
4. **Primeng Table**: Create a table using the Primeng library with sorting, tooltips, and a download button in the last column.
5. **Responsive Design**: Handle responsiveness for various screen sizes (mobile, tablet, and desktop).
6. **RTL/LTR Support**: Implement support for both Right-to-Left (RTL) and Left-to-Right (LTR) text directions.
7. **File Download**: Implement a file download service using the NGX filesaver package.
8. **Hover Animations**: Add hover states to all buttons for better interactivity.

### Components:
- **Chart Component**: Renders the Echarts line chart with customized styling.
- **Card Component**: Displays data in a card layout, following the design specifications.
- **Table Component**: Handles the display and management of ticket data using a dynamic table.

### Styling and Design:
- **Neo Sans Arabic and Inter Fonts**: Fonts are carefully integrated to match the design.
- **TailwindCSS and SCSS**: Styling is handled using a combination of SCSS and TailwindCSS for precise control over the layout, colors, and responsiveness.
  
### Technical Specifications:
- **Framework**: Angular 15
- **Charting Library**: Echarts
- **Table Library**: Primeng
- **QR Code Library**: Angular2-QRcode
- **File Download**: NGX Filesaver
- **Language Support**: LTR and RTL
- **Responsive**: Supports screen sizes ranging from 300px to 2000px

### Setup Instructions:
1. Clone this repository:
   ```bash
   git clone https://github.com/OmarZen/Cinema-Ticket-Dashboard
   ```
2. Navigate into the project directory:
   ```bash
   cd ticket-management-page
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   ng serve
   ```
5. Access the web page via `http://localhost:4200`.

### Additional Features:
- Hover animations for buttons to improve user interactivity.
- Full support for RTL layouts, allowing seamless integration with Arabic text.
  
## Submission Information:
This task was part of the evaluation for the **Frontend Developer** role at A Technologies. It has been developed according to the technical instructions and sent for assessment.

# TicketSalesApp - Angular Project Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Project Tree
```
ticket-sales-app
├─ .angular
├─ .editorconfig
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  ├─ 90724d5f4edec706acade1ba92d0c36ce658ba
│  │  │  └─ b9ca2ccf13a12b4dd7e81f9e83d260c93bcf8c
│  │  ├─ 01
│  │  │  └─ 349409624ef93b7319f437b7365d8ccb2c0e0d
│  │  ├─ 03
│  │  │  └─ d290a4d13a3b209a893de52b35c390eaf7bcae
│  │  ├─ 0a
│  │  │  └─ 96b73a4445fd84fa3e5937b63c1279e566d980
│  │  ├─ 0e
│  │  │  └─ f6429b5e995660ec98e617f5b6176274ba01a9
│  │  ├─ 10
│  │  │  └─ d066f35a22aa8094b8d517242f3434a174f868
│  │  ├─ 11
│  │  │  ├─ ccffabc962f74b36796172dcba50f08ec321eb
│  │  │  └─ dffa6d6581dc9a67cbdd49c29763bdfe614f98
│  │  ├─ 1b
│  │  │  └─ 9b24c4103366f8a9a1cb67f9f8a072c4939e0f
│  │  ├─ 1d
│  │  │  └─ 444dfc0a4fe0c0cbedb100e2601e69a04c5df5
│  │  ├─ 20
│  │  │  ├─ 0fbf401f48a0a13e73dff5ac84b851ec0365a7
│  │  │  └─ 4ed6e4b7fd0c0aa28ef4fd67a8097ac22272cd
│  │  ├─ 29
│  │  │  ├─ c82a2d968c71d9faf6111f47e6fbc7722b6ac6
│  │  │  └─ d449e74fa89143046555404c86a53377f5ca26
│  │  ├─ 2a
│  │  │  └─ efca243ee590f330f4b1d8f65bf8db193326ce
│  │  ├─ 2c
│  │  │  ├─ 8de9a3af786673c1bf11f5ee716d8c8aa35235
│  │  │  ├─ b2583c44f4b54ed5bdd31b754b90beede2e0c3
│  │  │  ├─ d8b4982176cac03559e614d90a0974fb344ff4
│  │  │  └─ f496faa1dd120a0df40a287144eebbe70c654d
│  │  ├─ 2d
│  │  │  ├─ 1bc76c78c12a6533ad70de8c80223a3ee836a3
│  │  │  └─ 9154668979f409e46fcb088279f64dce9392e2
│  │  ├─ 2f
│  │  │  └─ f31e3218fad7ba91b28a7f4713053c18bcac87
│  │  ├─ 35
│  │  │  └─ b00f3463311f2afe0fd0d9d5f696dbb992dff5
│  │  ├─ 36
│  │  │  ├─ 093e1879779624f181733152bb55d71a711d3b
│  │  │  ├─ 0b7fea6fed3a51d346e709cdd351ecc607752d
│  │  │  └─ e569cf395b28a2f6f293b06885a792b2e7a32b
│  │  ├─ 37
│  │  │  └─ 75b37e3bbc6659e266676de37fffdd7cfebb5c
│  │  ├─ 39
│  │  │  └─ 6e2b284ed309b6e7fc4e3b3efa25c6e0486a9d
│  │  ├─ 3a
│  │  │  └─ 6cfc3cd4accac5652873dd3780830e94cd26cc
│  │  ├─ 3c
│  │  │  └─ 9a5e482291c860ba263e6a7490f5279a9ff5b2
│  │  ├─ 3e
│  │  │  └─ d1852d9d1bbeaabadd3f693a1e3ff7701f6753
│  │  ├─ 3f
│  │  │  ├─ 2ce29f434c729305ca97ba828cf715d1c466d4
│  │  │  └─ f2c68b48bc31b06d8916079509ddb64d37995f
│  │  ├─ 45
│  │  │  └─ a5e56b198ff96cf8311c9bc207dc987dd6040f
│  │  ├─ 4a
│  │  │  └─ 886582a098d01b45e30a8e03a53b4d7f628de0
│  │  ├─ 4b
│  │  │  └─ 975d6f4e46cc0b5e39d5b1574aa64811a9fb46
│  │  ├─ 4c
│  │  │  └─ 144ca4689a208ef0171e200fcf41cacfe6e192
│  │  ├─ 4e
│  │  │  └─ 3a2fa2dc0317be01a92d0a6d1061c730f574d2
│  │  ├─ 52
│  │  │  └─ 9bdcae8abd4003585190b5e4b8f1f984f84111
│  │  ├─ 53
│  │  │  └─ 5f083bb2494292af141e5acd0765a8cf8c854e
│  │  ├─ 54
│  │  │  └─ 12a09a2f27b9bc1522afd588e3eed3c1ec534c
│  │  ├─ 55
│  │  │  └─ a06ae17fe231f5f7cd2ecba2097559cdc92e46
│  │  ├─ 56
│  │  │  └─ 96d396045962c608de6c9c6c515effbfac97f5
│  │  ├─ 57
│  │  │  └─ 614f9c967596fad0a3989bec2b1deff33034f6
│  │  ├─ 59
│  │  │  └─ d9a3a3e73ffc640517ef488f6f89d6270195d1
│  │  ├─ 5c
│  │  │  ├─ 0e707f4fda540638cd93fb42b64f46add07493
│  │  │  └─ e82f5db905829d38f29c80f1b481ed9847d5f1
│  │  ├─ 5d
│  │  │  └─ 00f0a36daacc560295b4085cabb91ba9bbc977
│  │  ├─ 5f
│  │  │  └─ b748d9207a99686549d6ef1415527dc544dd0f
│  │  ├─ 60
│  │  │  └─ d75b05a0155ad3f4e46fdcc340a364956b970d
│  │  ├─ 65
│  │  │  └─ 2cce1616660fe02c55c33a4bb57cefcd9dffe3
│  │  ├─ 6d
│  │  │  └─ cd5fb22f62c32fa492a42d297ef5e092804c6e
│  │  ├─ 76
│  │  │  └─ 74b65596a2ebdee1b896bce385066a94972702
│  │  ├─ 77
│  │  │  └─ b374577de83b86d846eadda2dd17532d7dabaa
│  │  ├─ 79
│  │  │  ├─ 437e73c3fb81447d8a492487e27c788b84289b
│  │  │  └─ 6ef6fe01707ca340dddcf46e84b68fa461e941
│  │  ├─ 7e
│  │  │  └─ 6157a4895a828035630f0b8a9ae1ce933fbfce
│  │  ├─ 7f
│  │  │  └─ c8912568fb2249f12cb069cfc18458fa8bd909
│  │  ├─ 80
│  │  │  └─ fe95d24a85d96b5581a0e2743415032484d8ce
│  │  ├─ 86
│  │  │  └─ 916893ef37841ac3239ab3bfac8ab9d33d38c6
│  │  ├─ 88
│  │  │  └─ 0fcab80077f060be837b051cfe5d07d22a3a9d
│  │  ├─ 89
│  │  │  ├─ 15abede3099ad2befdd2efaaf62652621b5215
│  │  │  └─ 2adee7f23a0e30cea9f8f51d8ed3b913c1365c
│  │  ├─ 8a
│  │  │  └─ dae3c4762f6960550c3250ae5b471936c354f1
│  │  ├─ 8b
│  │  │  └─ 214469c0df2ba7136a991a1a43e604b254e2ab
│  │  ├─ 8e
│  │  │  ├─ 2149ac0f407549d8a987f32d7acf14edcffad4
│  │  │  └─ a07cc99bccbdd828e2fbce2f13e56fe7a00947
│  │  ├─ 8f
│  │  │  └─ 6510adba0915ceacb9966e0cba565255eb6720
│  │  ├─ 90
│  │  │  └─ d4ee0072ce3fc41812f8af910219f9eea3c3de
│  │  ├─ 91
│  │  │  └─ 08035660e1b2d7cb948971d96cde02082d2974
│  │  ├─ 92
│  │  │  └─ 5af837050a4abe679c5fea0df7e41faf6fc011
│  │  ├─ 95
│  │  │  └─ 28910db8440a995f591ca757101af045d96ad4
│  │  ├─ 96
│  │  │  ├─ 32edfdd80ddcfd65e82f0cd2402d2f5f4a8000
│  │  │  └─ e448203aef0668a51b7a66b6ee2b0cc3316dd2
│  │  ├─ 97
│  │  │  └─ 93dd8846d38504f9da37be8bad920838d10089
│  │  ├─ 9a
│  │  │  └─ 3e621f9fcb1a30328794ecb536a30dc937e16b
│  │  ├─ 9d
│  │  │  └─ 309b8d07f5a91290466a583d6fe866265018e4
│  │  ├─ 9e
│  │  │  └─ 5cca96c8ab8c68e700c519fc528483f706da75
│  │  ├─ 9f
│  │  │  └─ 70103caa2ca4613821960e181863a64f30e785
│  │  ├─ a0
│  │  │  └─ 76b11099dcb6601fbb9c502af1f811b23ce5e1
│  │  ├─ a1
│  │  │  └─ e7d6f864c12b24d39204782ce2972f2091ca35
│  │  ├─ a2
│  │  │  └─ 98b5bd8796ac377fe9ed64caa249e24c7ec3b6
│  │  ├─ a3
│  │  │  └─ 1d1397db7edf2218b940bb9c47915092f0332f
│  │  ├─ a4
│  │  │  └─ 2ee7fd3d4970ae8f49def32e69f2c167788e86
│  │  ├─ a8
│  │  │  ├─ bb65b6e220b8a16a8cba8241833468f1145586
│  │  │  └─ da193f4fd2289402af6bf2e9f1585d4668da42
│  │  ├─ ac
│  │  │  ├─ 9e3a53812afacff91d9a00ac3ee72f418984cc
│  │  │  └─ e8f064a03cfbf7697f1a3cf881f2d6e9d8ee21
│  │  ├─ ae
│  │  │  └─ 048b63c5ca214d6fe300cf9040ed88da68a323
│  │  ├─ b0
│  │  │  └─ a4b5ca21705eddc7c3b25b067d6467e21ff4d5
│  │  ├─ b2
│  │  │  └─ cdb0bf4c2b6845943ae50e2d4c54b4bbb68c67
│  │  ├─ b3
│  │  │  └─ f1ecf44a54372bf90afbb60491417242b8769c
│  │  ├─ b9
│  │  │  ├─ 7be1d3224f3f557b4cd7fdd870713adec4b3f6
│  │  │  └─ 9a59df72adb74d31cb48fe31b8bd71b084a168
│  │  ├─ bb
│  │  │  └─ fbd9c530c78db55a9ee491d47093ef45f3cb01
│  │  ├─ bd
│  │  │  └─ 973364bcccdf661c7ce29d575006b7a492478a
│  │  ├─ bf
│  │  │  ├─ 15768af632bb4042d2d04225bb22156b762e62
│  │  │  └─ 5864e33e32864abd1ef2d1a743226da125b569
│  │  ├─ c0
│  │  │  ├─ a916213754f323494674cd43eccd9c6dde3363
│  │  │  └─ dfa4c8c4ea854e4057e02f1b72895e3ed95ffe
│  │  ├─ c3
│  │  │  └─ 72bcb8c30b7938df897a75336a403615437e78
│  │  ├─ c5
│  │  │  └─ 8dc05cbc6d094a9ed44203c6b69b74e5294452
│  │  ├─ c6
│  │  │  └─ cd47c6735c652a662b66dcf19f88835f1557cd
│  │  ├─ c8
│  │  │  └─ 7e63b0dcda1196dc6f01daf73f67dc69ae2eb8
│  │  ├─ ca
│  │  │  └─ b4c716b77891bff1867c648d55ed500b12114e
│  │  ├─ cc
│  │  │  ├─ 7b141350ffde43afce3ec16ea4d7b5007cde2b
│  │  │  └─ 8b43d3ae429bc9e7bca2ff0b839aa327570bd4
│  │  ├─ ce
│  │  │  └─ 4e4b03553a59143a67201c3046d774d474bf45
│  │  ├─ cf
│  │  │  ├─ 5c3469e4cb41a0cd1252d7c3a248f0d28d56c3
│  │  │  └─ e18a9cc01bfc46a60e362457dc3e0357217023
│  │  ├─ d1
│  │  │  ├─ 6b0e0fdf0e4d69eee006c9f0fb9de78391f034
│  │  │  ├─ 8ae8a498819803b0d4ef02d0d584ad01279e5b
│  │  │  └─ f2c43e7db8d294e5db36fe5855d77f8b9ef5e5
│  │  ├─ d8
│  │  │  └─ 80dbcc1cfed49231fdb8d8051b13f2b83ccc2b
│  │  ├─ dc
│  │  │  └─ 39edb5f23a35f788cba146dd7337127ba6c5ab
│  │  ├─ dd
│  │  │  ├─ 515cb8f1ade1937cae1625bd96c6a609ac7e4c
│  │  │  └─ ee0488de2a9aee50277f816274613484f5d4cb
│  │  ├─ de
│  │  │  └─ fe7fa2b8245cd6e4b0f6b4875a481bfab40066
│  │  ├─ df
│  │  │  └─ 91966178b6bb5112af26b156b63975c30d9911
│  │  ├─ e1
│  │  │  └─ 47d7f419cd85aa695714b1d107c9842b86963b
│  │  ├─ e3
│  │  │  └─ 8af5d191be5472e88a2c0aba95ec744f88f02d
│  │  ├─ e4
│  │  │  └─ 351362c9cc0839f318b510c2edc570578a1df9
│  │  ├─ e5
│  │  │  └─ f475ace286037cb69fd72bc0791eafd6b6839f
│  │  ├─ e6
│  │  │  ├─ 58bf3a429bc5f34d880588bd83acfe20e86619
│  │  │  ├─ 5bf6d47205d545b0200b668e8d93026565bade
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e9
│  │  │  └─ af159f287a9fe700fef8b086984b0517b5a380
│  │  ├─ ea
│  │  │  ├─ 1952875653f68d01a65c85aed3906377df8747
│  │  │  └─ 6dc4a4be20abcfe242742ee418d01b47521596
│  │  ├─ f1
│  │  │  └─ aa404b62763cdb351ce762a32d34ba1ab6f7c8
│  │  ├─ f3
│  │  │  └─ c73f2cd65e5dbc457ae4045c66641941864768
│  │  ├─ f4
│  │  │  └─ 94b1aabc9ddd48128ac85b102ee4a864b46e99
│  │  ├─ f5
│  │  │  ├─ 11eb08a78132be4f776029a6bcd1ce266c1c0e
│  │  │  └─ e4165a607a3e3360b20f29cb93264b535a14b8
│  │  ├─ f6
│  │  │  ├─ 798af6b244163a057d1ca5ff931145005b54f9
│  │  │  └─ 8eb0579087a76a3ab5faa75db26da885739779
│  │  ├─ f8
│  │  │  ├─ 1244a53483382f484713b183a64a0db8df8ad7
│  │  │  ├─ c46decfc74633c37972f7e858134ba469586a0
│  │  │  └─ d8ed5a6e49410a92fbc89e9eddcbe488bcb8b6
│  │  ├─ fd
│  │  │  ├─ 4fac2c14a17e2a9fdc2a8644429aed94870195
│  │  │  └─ bdfc1cb237e432ab19a524f00bd59399aeb017
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ angular.json
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ app
│  │  ├─ app.component.css
│  │  ├─ app.component.html
│  │  ├─ app.component.spec.ts
│  │  ├─ app.component.ts
│  │  ├─ app.config.ts
│  │  ├─ app.module.ts
│  │  ├─ app.routes.ts
│  │  ├─ components
│  │  │  ├─ chart
│  │  │  │  ├─ chart.component.css
│  │  │  │  ├─ chart.component.html
│  │  │  │  ├─ chart.component.spec.ts
│  │  │  │  └─ chart.component.ts
│  │  │  ├─ header
│  │  │  │  ├─ header.component.css
│  │  │  │  ├─ header.component.html
│  │  │  │  ├─ header.component.spec.ts
│  │  │  │  └─ header.component.ts
│  │  │  ├─ table
│  │  │  │  ├─ table.component.css
│  │  │  │  ├─ table.component.html
│  │  │  │  ├─ table.component.spec.ts
│  │  │  │  └─ table.component.ts
│  │  │  └─ ticket
│  │  │     ├─ ticket.component.css
│  │  │     ├─ ticket.component.html
│  │  │     ├─ ticket.component.spec.ts
│  │  │     └─ ticket.component.ts
│  │  ├─ interfaces
│  │  │  ├─ customer.ts
│  │  │  └─ user.ts
│  │  ├─ search.pipe.spec.ts
│  │  ├─ search.pipe.ts
│  │  └─ services
│  │     ├─ users.service.spec.ts
│  │     └─ users.service.ts
│  ├─ assets
│  │  └─ images
│  │     ├─ overlay.png
│  │     ├─ person.jpg
│  │     ├─ person2.jpg
│  │     └─ person3.jpg
│  ├─ index.html
│  ├─ main.ts
│  └─ styles.css
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```
