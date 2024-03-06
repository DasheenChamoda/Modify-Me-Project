class ValidationUtils{

  static String? validateUsername(String? value) {
    if (value == null || value.isEmpty) {
      return 'Please enter your username.';
    }
    return null;
  }

  static String? validateEmail(String? value) {
    if (value == null || value.isEmpty) {
      return 'Please enter your email address.';
    }

    if (!value.contains('@')) {
      return 'Please enter a valid email address.';
    }
    return null;
  }

  static String? validatePassword(String? value) {
    if (value == null || value.isEmpty) {
      return 'Please enter a password.';
    }
    return null;
  }

}