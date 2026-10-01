def create_account(kind, owner, balance):
    return {"kind": kind, "owner": owner, "balance": balance}
 
 
def format_money(amount):
    return f"PHP {amount:,.2f}"
 

def deposit(account, amount):
    account["balance"] += amount
    print(f"{account['owner']} deposited {format_money(amount)}. "
          f"New balance: {format_money(account['balance'])}")
 
 
def withdraw(account, amount):
    if amount > account["balance"]:
        print(f"{account['owner']} failed to withdraw {format_money(amount)}. "
              f"Insufficient funds.")
    else:
        account["balance"] -= amount
        print(f"{account['owner']} withdrew {format_money(amount)}. "
              f"New balance: {format_money(account['balance'])}")
 
 
def apply_month_end(account):
    if account["kind"] == "Savings":
        interest = account["balance"] * 0.02
        account["balance"] += interest
        print(f"{account['owner']} earned interest of {format_money(interest)}. "
              f"New balance: {format_money(account['balance'])}")
    elif account["kind"] == "Checking":
        fee = 100
        account["balance"] -= fee
        print(f"{account['owner']} was charged a monthly fee of {format_money(fee)}. "
              f"New balance: {format_money(account['balance'])}")
 
 
def print_summary(account):
    print(f"{account['owner']} ({account['kind']}): {format_money(account['balance'])}")
 
 
print("=== BANK ACCOUNT SIMULATION ===")
 
juan = create_account("Savings", "Juan", 5000)
maria = create_account("Checking", "Maria", 3000)
print(f"Created Savings account for Juan: {format_money(juan['balance'])}")
print(f"Created Checking account for Maria: {format_money(maria['balance'])}")
 
print()
print("--- Transactions ---")
deposit(juan, 1000)
withdraw(juan, 500)
withdraw(maria, 4000)
withdraw(maria, 1200)
 
print()
print("--- Month End ---")
apply_month_end(juan)
apply_month_end(maria)
 
print()
print("--- Final Summary ---")
print_summary(juan)
print_summary(maria)