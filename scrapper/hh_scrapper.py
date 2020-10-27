from selenium import webdriver

url = 'https://hhmt.com.au/money-transfer/vietnam'

driver = webdriver.Chrome()
driver.get(url)

# rate
# //*[@id="transfer-rate-banner"]/div/div/span[2]

rates = driver.find_elements_by_class_name('rate')

for rate in rates:
    r = rate.find_elements_by_xpath(
        './/*[@id="transfer-rate-banner"]/div/div/span[2]').text
    print(r)