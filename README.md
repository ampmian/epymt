# Guide for EPYMT website

## Before Starting

If you wish to preview the website when editing, you should install [Node.js](https://nodejs.org/) and run the following commands in the terminal:

```bash
npm install
```

Then, each time you want to preview the website, run:

```bash
npm run dev
```

After that, run to build 
```bash
npm run build
pm2 restart epymt
```

Remarks: the terminal should be in the root directory of the project, where the `package.json` file is located.

## Quick Guide

This quick guide is for updating the website with only the following content is changed:

- date, exam date and reserved date for courses
- lecturer names
- tuition fees
- application fees
- poster/leaflet images

with the following conditions:

- the courses hold this years are: tma/idm/ntc/tdg/cnag/uneg/gpcn/cnneg
- Only the following awards type: Outstanding Performance Awards and Excellent Performance Awards

### Updating General Information

Under the `app` folder, open the `data.js` file, you may find the following content:

```javascript
export const year = 2025;

export const applicationPeriodCHI = "2025年4月24日至2025年5月26日";
export const applicationPeriodENG = "24 Apr 2025 - 26 May 2025";

export const admissionTestDateCHI = "2025年5月31日（星期六）";
export const admissionTestDateENG = "31 May 2025 (Sat)";
```

The `year` variable will affect the navigation of "This Year's Courses" page. The "Past courses" page will automatically display years from 2003-2004 until `year-{year+1}`. Same for "Student Awards" page.

The `applicationPeriodCHI` and `applicationPeriodENG` variables will affect the application period displayed in the "application" page of the website, and the `admissionTestDateCHI` and `admissionTestDateENG` variables will affect the admission test date displayed in the same page.

### Updating Courses Information

Under the `app/[lng]/courses` folder, you will find every year's courses page. For example, the 2025 courses page is the folder `app/eng/courses/2526`. Inside the folder, you will find a `page.js` file, which contains the webpage for that year. Hence, when you want to add a new course page, you can just copy the folder of the previous year and rename it to the new year(e.g., `2627` for the 2026 courses page), then update the `page.js` file inside.

A simple structure of the `page.js` file is as follows:

```javascript
// some import statements

const courses = 
const date = 
const examDate = 
const reservedDate =
const lecturerCHI =
const lecturerENG = 
const tuitionFee = 
const applicationFee = 
const imagesList = 

export default async function Course({ params }) {
    // some initial setup code
    return (
        // here is the JSX code for the course page
    );
};
```

So, you can update the following variables to change the course page:

- `courses`: an array of course names, e.g., `["tma", "cnag", "idm", "ntc", "tdg"]`
- `date`: an array of strings, each string is a date in the format `dd/mm, dd/mm, ...`, e.g., `["14/7, 15/7, 17/7, 18/7, 21/7, 22/7, 24/7, 25/7, 28/7"]`, position of each date corresponds to the position of the course in the `courses` array.
- `examDate`: an array of strings, each string is a date in the format `dd/mm`, e.g., `["29/7", "30/7", "31/7", "1/8", "2/8"]`, position of each date corresponds to the position of the course in the `courses` array.
- `reservedDate`: an array of strings, each string is a date in the format `dd/mm, dd/mm, ...`, e.g., `["3/8", "4/8", "5/8", "6/8", "7/8"]`, position of each date corresponds to the position of the course in the `courses` array.
- `lecturerCHI`/`lecturerENG`: an array of strings, each string is a lecturer name in Chinese/English, e.g., `["李俊哲教授（中大）", "陳曉寧博士（中大）"]`, position of each name corresponds to the position of the course in the `courses` array.
- `tuitionFee`: a string representing the tuition fee, e.g., `"3,350"`
- `applicationFee`: a string representing the application fee, e.g., `"50"`
- `imagesList`: an array of strings, each string is the name of a poster image file, e.g., `["2526_poster_1.jpg", "2526_poster_2.jpg"]`. The images should be placed in the `public/leaflet&poster` folder.

### Updating Awards Information

Award pages are similar to course pages, you can find the award pages under the `app/[lng]/student-awards` folder.

The structure of the `page.js` file is as follows:

```javascript
// some import statements

export default async function StudentAwards({ params }) {
    // some initial setup code
    return (
        // some html code
            <AwardBox
                lang={lng}
                topic={}
                outstandingNameList={}
                outstandingSchoolList={}
                excellentNameList={}
                excellentSchoolList={}
                hardwork={}
            />
            // much more award boxes
        // some html code
    );
}
```

The `AwardBox` component is used to display the awards information. You need to fill in the following props:

- `topic`: a function call to`courseT()` get the translated topic name for the award box, e.g., `{courseT("tma")}` for the TMA course.
- `outstandingNameList`/`excellentNameList`: an array of strings, each string is a name of the award recipient, e.g., `{["陳小明", "李大華"]}`.
- `outstandingSchoolList`/`excellentSchoolList`: an array of strings, each string is the school of the award recipient, ordering corresponds to the names in the `outstandingNameList`/`excellentNameList`, e.g. `{["中大", "中大"]}`.
- `hardwork`: a integer representing the number of Industrious Performance Award, e.g., `{2}`.

With duplicated `AwardBox` components, you can add more award boxes for different courses.

## Detailed Guide

If you wish to update other content of the website, you may need to learn about **React**. The website is built with **Next.js** and **Tailwind CSS**.

### Updating Text Content

Due to the use of react-i18next, most of the website's content is stored under the `public/locales` folder, which contains the translation files for different languages. The translation files are in JSON format. If you want to change the text of the website, you can edit the JSON files directly.

To use the translation in the code, you should do the following:

1. make sure to import the translation function from `@/app/i18n-index`:

    ```javascript
    import { translation } from "@/app/i18n-index";
    ```

2. Then, use the `t` function to get the translated text:

    ```javascript
    const { t } = await translation(lng, "name");
    ```

    where `lng` is the language code (which should already grabbed from the `params`), and `"name"` is the namespace of the translation file, i.e., the name of the JSON file without `.json`.

    For example, if you want to get the translated text from `public/locales/en/home.json`, you can do:

    ```javascript
    const { t } = await translation(lng, "home");
    ```

3. Finally, you can use the `t` function to get the translated text:

    ```javascript
    const title = t("title_1");
    ```

    where `"title_1"` is the key in the JSON file.

## Deployment

My deployment is done by following this [guide](https://gist.github.com/xxrjun/ed327645acffff40faff1400dc6e1dba). To update the website, you can just run the following commands in the terminal under the root directory of the project:

```bash
npm run build
pm2 restart 1
```
