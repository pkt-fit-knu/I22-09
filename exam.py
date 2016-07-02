import re

reCreateVar = "(\w+)='([^']+)';"
rePrintVar = "print (\w+);"
reCompareVarStr = "(\w+)=='([^']+)'"
reWhile = "while ([^{]+){([^}]+)}"

class Project:
	def __init__(self):
		self.Variables = {}

	def exists_variable(self, var_name):
		# print('varname', var_name)
		# print(self.Variables)
		return (var_name in self.Variables)

	def create_variable(self, var_name):
		if not self.exists_variable(var_name):
			self.Variables[var_name] = {'value': ''}
		else:
			raise Exception('a')

	def set_variable(self, var_name, var_value):
		if self.exists_variable(var_name):
			self.Variables[var_name]['value'] = var_value
		else:
			raise Exception('a')

	def make_variable(self, var_name, var_value):
		if not self.exists_variable(var_name):
			self.create_variable(var_name)
		self.set_variable(var_name, var_value)

	def print_variable(self, var_name):
		if self.exists_variable(var_name):
			print(self.Variables[var_name]['value'])
		else:
			raise Exception('a')

	def get_var_value(self, var_name):
		if self.exists_variable(var_name):
			return self.Variables[var_name]['value']

	def check_condition(self, condition):
		if re.match(reCompareVarStr, condition):
			comp1, comp2 = re.match(reCompareVarStr, condition).groups()
			if self.get_var_value(comp1) == comp2:
				return True
			return False

	def make_while(self, while_condition, while_body):
		# print('while', while_condition, while_body)
		while self.check_condition(while_condition):
			self.Run(while_body)

	def create_method(self, name_method, args, method_body):
		pass

	def run_method(self, name_method):
		pass

	def Run(self, code):
		while code:
			# print('code',code)
			if re.match(reCreateVar, code):
				var_name, var_value = re.match(reCreateVar, code).groups()
				code = re.sub(reCreateVar, '', code, 1)
				self.make_variable(var_name, var_value)
			elif re.match(rePrintVar, code):
				var_name, = re.match(rePrintVar, code).groups()
				code = re.sub(rePrintVar, '', code, 1)
				self.print_variable(var_name)
			elif re.match(reWhile, code):
				while_cond, while_body = re.match(reWhile, code).groups()
				code = re.sub(reWhile, '', code, 1)
				self.make_while(while_cond, while_body)

	def RunFromFile(self, file_name):
		f = open(file_name, 'r', encoding='UTF-8')
		code = f.read().replace('\n', '')
		self.Run(code)


Project().RunFromFile('code.txt')








