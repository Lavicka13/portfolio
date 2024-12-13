import React from 'react';
import { Button, Group, SimpleGrid, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import emailjs from 'emailjs-com';
import './GetInTouchSimple.css';

function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2 && 'Name must be at least 2 characters long',
      email: (value) => !/^\S+@\S+$/.test(value) && 'Invalid email address',
      subject: (value) => value.trim().length === 0 && 'Subject cannot be empty',
    },
  });

  const handleSubmit = async (values) => {
    try {
      const result = await emailjs.send(
        'service_7t84mvc', // EmailJS Service ID
        'template_ahblod5', // EmailJS Template ID
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        'GsetMlXKVrUNgA5yr' // EmailJS Public Key
      );
      alert('Email successfully sent!');
      console.log('EmailJS Response:', result.text);
    } catch (error) {
      alert('Error sending the email');
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className="form">
      <Title order={2} size="h1" ta="center">
        Get in touch
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          required
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          required
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        required
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />

      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>
  );
}

export default GetInTouchSimple;
