import xlsx from 'xlsx';

const workbook = xlsx.readFile('../bnb_tasks_backlog.xlsx');
const sheetNames = workbook.SheetNames;

const data = {};
for (const sheetName of sheetNames) {
  const sheet = workbook.Sheets[sheetName];
  data[sheetName] = xlsx.utils.sheet_to_json(sheet);
}

console.log(JSON.stringify(data, null, 2));
