// Lab Programs Data
const labPrograms = [
    {
        id: 1,
        title: "Fibonacci Series",
        description: "To print the Fibonacci series of n numbers",
        language: "Python",
        code: `def fibo(n):
    n1 = 0
    n2 = 1
    print("Fibonacci Series are:\\t", n1, "\\t", n2, end="\\t")
    n3 = n2
    count = 3
    while count <= n:
        print(n3, end="\\t")
        n1, n2 = n2, n3
        n3 = n1 + n2
        count += 1

n = int(input("Enter the Fibonacci series limit: "))
fibo(n)`
    },
    {
        id: 2,
        title: "Factorial and Sum",
        description: "To print the factorial and sum of n numbers",
        language: "Python",
        code: `def fact(n):
    return 1 if (n==1 or n==0) else n * fact(n - 1)

def sum(n):
    return 0 if (n==0) else n+sum(n-1)

num = int(input("Enter any number : "))

while True:
    print("\\nMENU\\n 1-To find the factorial, \\n 2-To find the sum\\n 3-Exit\\n")
    opt=int(input("Enter the option 1-3 : "))
    
    if opt==1:
        print("Factorial of ",num,"is : ",fact(num))
    elif opt==2:
        print("Sum of ",num,"is : ",sum(num))
    else:
        print("Exit")
        break`
    },
    {
        id: 3,
        title: "Interest Amount Calculation",
        description: "To calculate the interest amount",
        language: "Python",
        code: `def simplnt(p,t,r):
    si = float(p*t*r/100)
    return si

def complnt(p,t,r):
    ci = float(p* ((1+r/100)**t - 1))
    return ci

p = float(input('Enter the Principle Amount: '))
t = float(input('Enter the Time: '))
r = float(input('Enter Rate of Interest: '))

si=simplnt(p,t,r)
ci=complnt(p,t,r)

print('Simple interest is Rs. %.2f' % si)
print('Compound interest is Rs. %.2f' % ci)

diffint=ci-si;
print("Difference is Rs. %.2f" % diffint)`
    },
    {
        id: 4,
        title: "Read and Display Text File Details",
        description: "To display uppercase, lowercase, vowels, and consonants from a text file",
        language: "Python",
        code: `def count_characters(file_name):
    vowels = "aeiouAEIOU"
    vowel_count = 0
    consonant_count = 0
    uppercase_count = 0
    lowercase_count = 0
    
    with open(file_name, "r") as file:
        text = file.read()
    
    for char in text:
        if char.isalpha():
            if char in vowels:
                vowel_count += 1
            else:
                consonant_count += 1
        
        if char.isupper():
            uppercase_count += 1
        elif char.islower():
            lowercase_count += 1
    
    print("Vowels:", vowel_count)
    print("Consonants:", consonant_count)
    print("Uppercase characters:", uppercase_count)
    print("Lowercase characters:", lowercase_count)

def create_text_file(file_name, content):
    with open(file_name, "w") as file:
        file.write(content)

file_name = "sample.txt"
content = input("Enter few sentences to create a text file with content: ")
create_text_file(file_name, content)
count_characters(file_name)`
    },
    {
        id: 5,
        title: "File Content Statistics",
        description: "To calculate the number of lines, words, and characters in a file",
        language: "Python",
        code: `def count_text_file(file_name):
    line_count = 0
    word_count = 0
    char_count = 0
    
    with open(file_name, "r") as file:
        for line in file:
            line_count += 1
            word_count += len(line.split())
            char_count += len(line)
    
    print("Lines:", line_count)
    print("Words:", word_count)
    print("Characters:", char_count)

def create_text_file(file_name, content):
    with open(file_name, "w") as file:
        file.write(content)

file_name = "sample.txt"
content = """Excel PU College
Vidyasagar and Aramalebetta Campus
Guruvayanakere"""

create_text_file(file_name, content)
count_text_file(file_name)`
    },
    {
        id: 6,
        title: "Create Student Marks File",
        description: "To enter the student's name and marks",
        language: "Python",
        code: `import pickle

while True:
    print("""1. Create Binary File.
2. Display the File.
3. Exit""")
    a = int(input("Enter the option "))
    
    if a == 1:
        f = open('student.dat', 'wb')
        x = int(input('How many student: '))
        for i in range(x):
            name = input('Name: ')
            E = int(input('English Mark: '))
            K = int(input("Language Marks "))
            P = int(input('Physics Mark: '))
            C = int(input('Chemistry Mark: '))
            M = int(input('Maths Mark: '))
            CS = int(input('CS Mark: '))
            t = [name, E, K, P, C, M, CS]
            pickle.dump(t, f)
        f.close()
    
    elif a == 2:
        f = open('student.dat', 'rb')
        try:
            while True:
                p = pickle.load(f)
                print(p)
        except:
            f.close()
    else:
        print("Exit")
        break`
    },
    {
        id: 7,
        title: "Copy High-Scoring Students",
        description: "To copy the records of students whose marks are greater than 90",
        language: "Python",
        code: `import pickle

while True:
    print("""1. Create Binary File.
2. Display the main File.
3. Create new file with >90
4. Exit""")
    a = int(input('Enter the option'))
    
    if a == 1:
        f = open('student.dat', 'wb')
        o = open('stuii.dat', 'wb')
        x = int(input('How many student: '))
        for i in range(x):
            name = input('Name: ')
            E = int(input('English Mark: '))
            K = int(input("Language Marks"))
            P = int(input('Physics Mark: '))
            C = int(input('Chemistry Mark: '))
            M = int(input('Maths Mark: '))
            CS = int(input('CS Mark: '))
            total = P + C + CS + M + E + K
            per = (total / 600) * 100
            t = [name, E, K, P, C, M, CS, total, per]
            pickle.dump(t, f)
            if per >= 90:
                pickle.dump(t, o)
        f.close()
        o.close()
    
    elif a == 2:
        f = open('student.dat', 'rb')
        try:
            while True:
                p = pickle.load(f)
                print(p)
        except:
            f.close()
    
    elif a == 3:
        print("Students with > 90 Marks")
        f = open('stuii.dat', 'rb')
        try:
            while True:
                o = pickle.load(f)
                print(o)
        except:
            f.close()
    else:
        print("Exit")
        break`
    },
    {
        id: 8,
        title: "Bubble Sort Method",
        description: "To sort the elements using the bubble sort method",
        language: "Python",
        code: `def bubble_Sort(list):
    n = len(list)
    for i in range(1, n):
        for j in range(n-i):
            if list[j] > list[j+1]:
                list[j], list[j+1] = list[j+1], list[j]

List = []
n = int(input("Enter the number of elements in List "))
print("Enter the numbers to List")
for i in range(n):
    ele = int(input())
    List.append(ele)

print("Unsorted List is ", List)
bubble_Sort(List)
print("The sorted list is: ", List)`
    },
    {
        id: 9,
        title: "Selection Sort Method",
        description: "To sort the elements using the selection sort method",
        language: "Python",
        code: `def selection_Sort(list):
    n = len(list)
    for i in range(n-1):
        min = i
        flag = 0
        for j in range(i + 1, n):
            if list[j] < list[min]:
                min = j
                flag = 1
        if flag == 1:
            list[i], list[min] = list[min], list[i]

List = []
n = int(input("Enter the number of elements in List "))
print("Enter the numbers to List")
for i in range(n):
    ele = int(input())
    List.append(ele)

print("Unsorted List is ", List)
selection_Sort(List)
print("The sorted list is: ", List)`
    },
    {
        id: 10,
        title: "Insertion Sort Method",
        description: "To sort the elements using the insertion sort method",
        language: "Python",
        code: `def insertion_Sort(list):
    n = len(list)
    for i in range(1, n):
        for j in range(i, 0, -1):
            if list[j] < list[j-1]:
                list[j], list[j-1] = list[j-1], list[j]

List = []
n = int(input("Enter the number of elements in List "))
print("Enter the numbers to List")
for i in range(n):
    ele = int(input())
    List.append(ele)

print("Unsorted List is ", List)
insertion_Sort(List)
print("The sorted list is:", List)`
    },
    {
        id: 11,
        title: "Linear Search Method",
        description: "To search an element in a list using linear search method",
        language: "Python",
        code: `def linear_search(list, key):
    n = len(list)
    for i in range(n):
        if list[i] == key:
            return i
    return None

List = []
n = int(input("Enter the number of elements in the list: "))
print("Enter the elements to List")
for i in range(n):
    ele = int(input())
    List.append(ele)

print("Elements in the List are: ", List)
key = int(input("Enter the element to be search: "))
pos = linear_search(List, key)

if pos is None:
    print(key, " is not found in the list.")
else:
    print(key, " is found at index of the List is ", pos)`
    },
    {
        id: 12,
        title: "Binary Search Method",
        description: "To search an element in a list using binary search method",
        language: "Python",
        code: `def binary_search(list, key):
    first, last = 0, len(list) - 1
    while first <= last:
        mid = (first + last) // 2
        if list[mid] == key:
            return mid
        elif list[mid] < key:
            first = mid + 1
        else:
            last = mid - 1
    return None

List = []
n = int(input("Enter the number of elements in the list: "))
for i in range(n):
    ele = int(input("Enter the elements in ascending order: "))
    List.append(ele)

key = int(input("Enter the element to be search: "))
loc = binary_search(List, key)

if loc is None:
    print(key, " is not found in the list.")
else:
    print(key, " is found at index of List ", loc)`
    },
    {
        id: 13,
        title: "Display Stack Elements",
        description: "To add and display elements from a stack using list",
        language: "Python",
        code: `def display(S):
    if len(S) == 0:
        print("Stack is empty")
    else:
        print("Stack elements are: ", S)

S = []
display(S)

print("To perform Push operation")
S.append(10)
display(S)
S.append(20)
display(S)
S.append(30)
display(S)

print("The size of the Stack is: ", len(S))

print("To perform Pop operation")
S.pop()
display(S)
S.pop()
display(S)
S.pop()
display(S)`
    },
    {
        id: 14,
        title: "Display Queue Elements",
        description: "To add and display elements from a queue using list",
        language: "Python",
        code: `def display(Q):
    if len(Q) == 0:
        print("Queue is empty")
    else:
        print("Queue elements are: ", Q)

Q = []
display(Q)

print("To perform Enqueue operation")
Q.append(10)
display(Q)
Q.append(20)
display(Q)
Q.append(30)
display(Q)

print("The size of the Queue is: ", len(Q))

print("To perform Dequeue operation")
Q.pop(0)
display(Q)
Q.pop(0)
display(Q)
Q.pop(0)
display(Q)`
    }
];


// SQL Projects Data
const sqlProjects = [
    {
        id: 1,
        title: "Student Marks System",
        description: "Database for managing student marks and percentages",
        sections: {
            creation: `-- Create marks Table
CREATE TABLE marks (
    Rollno INT(5),
    Sname VARCHAR(15) NOT NULL,
    Lang_mks INT(3) CHECK (Lang_mks BETWEEN 0 AND 100),
    Eng_mks INT(3) CHECK (Eng_mks BETWEEN 0 AND 100),
    Sub1_mks INT(3) CHECK (Sub1_mks BETWEEN 0 AND 100),
    Sub2_mks INT(3) CHECK (Sub2_mks BETWEEN 0 AND 100),
    Sub3_mks INT(3) CHECK (Sub3_mks BETWEEN 0 AND 100),
    Sub4_mks INT(3) CHECK (Sub4_mks BETWEEN 0 AND 100)
);`,
            insertion: `-- Insert Student Records
INSERT INTO marks VALUES(1010, 'RAJ', 89, 97, 98, 99, 86, 95);
INSERT INTO marks VALUES(1026, 'KIRAN', 67, 62, 72, 86, 72, 62);
INSERT INTO marks VALUES(1042, 'ANAND', 78, 87, 92, 82, 72, 76);
INSERT INTO marks VALUES(1250, 'RAM', 72, 86, 72, 62, 87, 68);
INSERT INTO marks VALUES(5212, 'VIJAYA', 46, 58, 86, 92, 72, 62);
INSERT INTO marks VALUES(3622, 'MANOJ', 86, 56, 62, 86, 52, 64);
INSERT INTO marks VALUES(1948, 'REEHAN', 63, 68, 52, 56, 96, 76);
INSERT INTO marks VALUES(1482, 'KAJOL', 49, 54, 48, 76, 62, 55);
INSERT INTO marks VALUES(1947, 'KUMAR', 98, 98, 99, 100, 97, 99);
INSERT INTO marks VALUES(1951, 'REEMA', 82, 72, 62, 98, 73, 0);`,
            queries: `-- List all records
SELECT * FROM marks;

-- Display table description
DESCRIBE marks;

-- Add new attributes
ALTER TABLE marks ADD(total INT(3), percent FLOAT(5,3));

-- Calculate total and percentage
UPDATE marks SET total = lang_mks + eng_mks + sub1_mks + sub2_mks + sub3_mks + sub4_mks;
UPDATE marks SET percent = total/600*100;

-- Students with >60%
SELECT sname, percent FROM marks WHERE percent >= 60;

-- Students with 60-85%
SELECT sname, percent FROM marks WHERE percent BETWEEN 60 AND 85;

-- Students ordered by percentage
SELECT sname, percent FROM marks ORDER BY percent DESC;`
        }
    },
    {
        id: 2,
        title: "BESCOM Electricity Billing",
        description: "Database for managing electricity bills and consumption",
        sections: {
            creation: `-- Create BESCOM Table
CREATE TABLE BESCOM (
    RRNO VARCHAR(10) PRIMARY KEY,
    CUSTNAME VARCHAR(25) NOT NULL,
    BILLDATE DATE,
    UNITS INT(4)
);`,
            insertion: `-- Insert Customer Records
INSERT INTO BESCOM VALUES('E1120', 'RAJ', '2024-05-05', 250);
INSERT INTO BESCOM VALUES('E2210', 'KIRAN', '2024-03-26', 178);
INSERT INTO BESCOM VALUES('E1450', 'ANAND', '2024-04-15', 56);
INSERT INTO BESCOM VALUES('E2126', 'RAM', '2024-05-08', 782);
INSERT INTO BESCOM VALUES('E1562', 'MANJULA', '2024-05-02', 562);
INSERT INTO BESCOM VALUES('E6221', 'MANOJ', '2024-05-18', 72);
INSERT INTO BESCOM VALUES('E5822', 'REEHAN', '2024-02-19', 92);
INSERT INTO BESCOM VALUES('E1692', 'KAJOL', '2024-03-25', 73);
INSERT INTO BESCOM VALUES('E6721', 'KUMAR', '2024-07-14', 589);
INSERT INTO BESCOM VALUES('E2682', 'REEMA', '2024-05-11', 100);`,
            queries: `-- View table structure
DESCRIBE BESCOM;

-- List all records
SELECT * FROM BESCOM;

-- Add bill amount field
ALTER TABLE BESCOM ADD BILLAMT FLOAT(7,2);

-- Calculate bill amount for units <= 100
UPDATE BESCOM SET BILLAMT = 100 + UNITS * 7.50 WHERE UNITS <= 100;

-- Calculate bill amount for units > 100
UPDATE BESCOM SET BILLAMT = 100 + (100 * 7.50) + (UNITS - 100) * 8.50 WHERE UNITS > 100;

-- Display billing statistics
SELECT MAX(BILLAMT), MIN(BILLAMT), AVG(BILLAMT), SUM(BILLAMT) FROM BESCOM;

-- List bills sorted by RRNO
SELECT RRNO FROM BESCOM ORDER BY RRNO;`
        }
    },
    {
        id: 3,
        title: "Student Information System",
        description: "Database for managing student details and combinations",
        sections: {
            creation: `-- Create student Table
CREATE TABLE student (
    Rollno INT(5) PRIMARY KEY,
    Sname VARCHAR(15) NOT NULL,
    dob DATE,
    Gender CHAR(1),
    Combn VARCHAR(5),
    Class VARCHAR(6)
);`,
            insertion: `-- Insert Student Records
INSERT INTO student VALUES (3739, 'Uday', '2004-09-12', 'M', 'PCMC', '2B');
INSERT INTO student VALUES (1001, 'Raj Kumar', '2005-05-21', 'M', 'BASC', '2A');
INSERT INTO student VALUES (1005, 'Kiran', '2004-11-15', 'M', 'PCMC', '2B');
INSERT INTO student VALUES (1042, 'Anand', '2005-12-22', 'M', 'CEBA', '2C');
INSERT INTO student VALUES (1250, 'Ram', '2004-06-18', 'M', 'PCMC', '2A');
INSERT INTO student VALUES (5212, 'Vijaya', '2007-07-28', 'F', 'PCMC', '2A');
INSERT INTO student VALUES (1029, 'Bharath', '2005-01-12', 'M', 'BASC', '2B');
INSERT INTO student VALUES (2152, 'Rekha', '2006-06-08', 'F', 'CEBA', '2C');
INSERT INTO student VALUES (1948, 'Reehan', '2005-04-17', 'M', 'CEBA', '2C');
INSERT INTO student VALUES (2443, 'Manjula', '2005-08-15', 'F', 'PCMC', '2B');`,
            queries: `-- List all students
SELECT * FROM student;

-- List students in BASC or CEBA combinations
SELECT * FROM student WHERE combn='BASC' OR combn='CEBA';

-- List unique combinations
SELECT DISTINCT(combn) FROM student;

-- List students alphabetically
SELECT sname FROM student ORDER BY sname;

-- List students alphabetically class-wise
SELECT sname, class FROM student ORDER BY class, sname;

-- List students born in June
SELECT * FROM student WHERE MONTH(dob) = 6;

-- Count students by gender
SELECT gender, COUNT(*) FROM student GROUP BY gender;`
        }
    },
    {
        id: 4,
        title: "Library Book Management",
        description: "Database for managing library books and inventory",
        sections: {
            creation: `-- Create Library Table
CREATE TABLE Library (
    Title VARCHAR(75) NOT NULL,
    Author VARCHAR(60),
    Year INT(4),
    Category VARCHAR(25),
    Price FLOAT(7,2),
    Qty INT(4)
);`,
            insertion: `-- Insert Book Records
INSERT INTO Library VALUES('The Data Science Handbook', 'Darshan', 2019, 'Data Science', 750.00, 12);
INSERT INTO Library VALUES('Introduction to Computer Programs', 'Harshavardhan', NULL, 'Computer Science', 700.00, 6);
INSERT INTO Library VALUES('Computer Science Text book Class 12', 'Reeta Sahoo', 2019, 'Textbook', 450.00, 4);
INSERT INTO Library VALUES('A book on AI', 'Sagar', 2016, 'AI', 200.00, 7);
INSERT INTO Library VALUES('Robots and Automation', 'Dushyanth', 2018, 'Digital Technology', 750.00, 9);
INSERT INTO Library VALUES('AI 2041', 'Chen & Lee', 2021, 'AI', 1000.00, 2);
INSERT INTO Library VALUES('Computer Hardware and Software', 'Chethan', 2000, 'Computer Science', 500.00, 7);
INSERT INTO Library VALUES('The Future of Work', 'Dev Kumar', 2018, 'Digital Technology', 750.00, 4);
INSERT INTO Library VALUES('Healthcare and AI', 'Eshwar', 2019, 'AI', 950.00, 9);
INSERT INTO Library VALUES('Introduction to Data Science', 'Dravid', 2014, 'Data Science', 400.00, 5);`,
            queries: `-- List all books
SELECT * FROM Library;

-- Add and calculate Amount column
ALTER TABLE Library ADD(Amount FLOAT(7,2));
UPDATE Library SET Amount = Price * Qty;

-- Books priced between 400 and 900
SELECT * FROM Library WHERE Price BETWEEN 400 AND 900;

-- Books with no publication year
SELECT Title, Year FROM Library WHERE Year IS NULL;

-- Authors starting with 'C' or 'D'
SELECT Author FROM Library WHERE Author LIKE 'C%' OR Author LIKE 'D%';

-- Books with 'science' in category
SELECT Title, Year, Category FROM Library WHERE Category LIKE '%science%';

-- Books published 2010 onward with price < 750
SELECT * FROM Library WHERE Year >= 2010 AND Price < 750;`
        }
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader after 1 second
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 1000);
    
    renderPrograms();
    renderSQL();
    initTheme();
});

// Render Programs
function renderPrograms() {
    const grid = document.getElementById('programsGrid');
    grid.innerHTML = labPrograms.map(p => `
        <div class="program-card">
            <div class="card-header">
                <span class="card-title">${p.title}</span>
                <span class="card-badge">Lab ${p.id}</span>
            </div>
            <p class="card-desc">${p.description}</p>
            <div class="code-block">
                <div class="code-toolbar">
                    <span class="code-lang">${p.language}</span>
                    <button class="copy-btn" data-code="${encodeURIComponent(p.code)}">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                </div>
                <pre class="code-content">${escapeHtml(p.code)}</pre>
            </div>
        </div>
    `).join('');
    
    // Add copy listeners
    grid.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => copyCode(btn));
    });
}

// Render SQL
function renderSQL() {
    const grid = document.getElementById('sqlGrid');
    grid.innerHTML = sqlProjects.map(p => `
        <div class="sql-card">
            <div class="sql-card-header">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
            </div>
            <div class="sql-card-body">
                <div class="sql-top-row">
                    <div class="sql-inner-card sql-structure">
                        <div class="sql-inner-header">
                            <span>Table Structure</span>
                            <button class="copy-btn" data-code="${encodeURIComponent(p.sections.creation)}">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                        </div>
                        <pre class="sql-inner-code">${escapeHtml(p.sections.creation)}</pre>
                    </div>
                    <div class="sql-inner-card sql-insert">
                        <div class="sql-inner-header">
                            <span>Insert Statements</span>
                            <button class="copy-btn" data-code="${encodeURIComponent(p.sections.insertion)}">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                        </div>
                        <pre class="sql-inner-code">${escapeHtml(p.sections.insertion)}</pre>
                    </div>
                </div>
                <div class="sql-queries-card">
                    <div class="sql-inner-header">
                        <span>Queries</span>
                    </div>
                    <div class="sql-queries-list">
                        ${generateQueries(p.sections.queries)}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Copy listeners
    grid.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => copyCode(btn));
    });
}

// Generate individual queries with questions
function generateQueries(queriesCode) {
    const queries = queriesCode.split(/(?=-- )/g).filter(q => q.trim());
    return queries.map((query, index) => {
        const lines = query.trim().split('\n');
        const question = lines[0].replace('-- ', '');
        const code = lines.slice(1).join('\n').trim();
        if (!code) return '';
        return `
            <div class="sql-query-item">
                <div class="sql-query-question">${question}</div>
                <div class="sql-query-answer">
                    <pre class="sql-query-code">${escapeHtml(code)}</pre>
                    <button class="copy-btn copy-btn-small" data-code="${encodeURIComponent(code)}">
                        <i class="fas fa-copy"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Copy function
function copyCode(btn) {
    const code = decodeURIComponent(btn.dataset.code);
    navigator.clipboard.writeText(code).then(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        showToast();
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
        }, 2000);
    });
}

// Show toast
function showToast() {
    const toast = document.getElementById('copiedToast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// Escape HTML
function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Theme
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    updateIcon(theme);
    
    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateIcon(next);
    });
}

function updateIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Create stars - milky way style
function createStars() {
    const container = document.getElementById('stars');
    if (!container) return;
    
    // Regular small stars
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const size = Math.random() * 2 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = Math.random() * 4 + 's';
        star.style.animationDuration = (Math.random() * 4 + 3) + 's';
        container.appendChild(star);
    }
    
    // Brighter stars
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star bright';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const size = Math.random() * 2 + 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = Math.random() * 4 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(star);
    }
    
    // Blue-tinted stars
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star blue';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const size = Math.random() * 2 + 1.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = Math.random() * 4 + 's';
        star.style.animationDuration = (Math.random() * 5 + 3) + 's';
        container.appendChild(star);
    }
}

createStars();

// Shooting Star Cursor Trail
function createCursorTrail() {
    let lastX = 0;
    let lastY = 0;
    let throttle = false;
    
    document.addEventListener('mousemove', (e) => {
        if (throttle) return;
        throttle = true;
        
        setTimeout(() => {
            throttle = false;
        }, 20);
        
        // Calculate distance moved
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only create trail if mouse moved enough
        if (distance > 5) {
            createTrailParticle(e.clientX, e.clientY);
            lastX = e.clientX;
            lastY = e.clientY;
        }
    });
}

function createTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'cursor-trail';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // Random size variation
    const size = Math.random() * 4 + 6;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 600);
}

// Initialize cursor trail
createCursorTrail();
