import qrcode

def generate_qrcode(text):
    
    qr = qrcode.QRCode(
        version = 1,
        error_correction = qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    
    qr.add_data(text)
    qr.make(fit=True)
    img = qr.make_image(fill_colors="black", black_colors="white")
    img.save('/Users/davidcraccer/downloads/qrimg.png')
    
url = input("Enter your URL: ")
generate_qrcode(url)