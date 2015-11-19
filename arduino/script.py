def read_ciphers():
	bytes = [['' for x in range(36)] for x in range(3)]
	line_num = 0
	
	with open('ciphers.txt','r') as f:
		for line in f:
			word_num = 0
			
			for word in line.split():
				bytes[line_num][word_num] = word
				word_num += 1
			
			line_num += 1
			
	return bytes
	
def get_xor(c1, c2):
	return [ord(c1[i].decode('hex')) ^ ord(c2[i].decode('hex')) for i in range(len(c1))]
	
def try_crib(crib, c1, c2):

	xored = get_xor(c1, c2)
	
	for i in range(len(xored)-len(crib)):
		print 'at index ' + str(i) + ': ',
		
		for j in range(len(crib)):
			print chr(ord(crib[j])^xored[i+j]),
		
		print ''
		
def xor_two(word1, word2):
	res = ''
	
	for i in range(len(word1)):
		res += chr(ord(word1[i]) ^ ord(word2[i]))
	
	return res

def get_ord(hex_string):
	return ord(hex_string.decode('hex'))

def get_ords_list(hex_list):
	return [get_ord(x) for x in hex_list]

def get_word_from_list(hex_list):
	res = ''
	ords_list = get_ords_list(hex_list)
	
	for i in range(len(ords_list)):
		res += chr(ords_list[i])
	
	return res