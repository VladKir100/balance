const data = [
    { day: "mon", amount: 17.45 },
    { day: "tue", amount: 34.91 },
    { day: "wed", amount: 52.36 },
    { day: "thu", amount: 31.07 },
    { day: "fri", amount: 23.39 },
    { day: "sat", amount: 43.28 },
    { day: "sun", amount: 25.48 }
];
const maxAmount = Math.max(...data.map(item => item.amount));
const bars = document.querySelectorAll('.mon');
const sum = document.querySelectorAll('.sum')
const today = new Date().toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
bars.forEach((bar, index) => {
    const currentAmount = data[index].amount;
    const heightPercent = (currentAmount / maxAmount) * 100;
    const dataDAy = data[index].day;
    bar.style.height = `${heightPercent}%`;
    if (dataDAy === today) {
        bar.style.backgroundColor = 'hsl(186, 34%, 65%)'
    }
});
sum.forEach((s, index) => {
    const currAmount = data[index].amount;
    s.textContent = `$${currAmount}`;

});
const balance = document.getElementById('balance-value');
let currentBalance = parseFloat(balance.textContent.replace('$', ''));
setInterval(() => {
    const randomAdd = Math.random();
    currentBalance += randomAdd;
    balance.textContent = `$${currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}, 3000);

