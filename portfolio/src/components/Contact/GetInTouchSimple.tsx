import React, { useState } from 'react';
import { Button, Group, SimpleGrid, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import emailjs from 'emailjs-com';
import './GetInTouchSimple.css';

function Notification({ message, type, onClose }) {
  if (!message) return null;

  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}

function GetInTouchSimple() {
  const [notification, setNotification] = useState({ message: '', type: '' });

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2 && 'Name must be at least 2 characters long',
      email: (value) => !/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(value) && 'Invalid email address',
      subject: (value) => value.trim().length === 0 && 'Subject cannot be empty',
      message: (value) => value.trim().length < 50 && 'Message must be at least 50 characters long'
    },
  });

  const handleSubmit = async (values) => {
    try {
      const result = await emailjs.send(
        'service_7t84mvc',
        'template_ahblod5',
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        'GsetMlXKVrUNgA5yr'
      );

      setNotification({ message: 'Your message has been successfully sent!', type: 'success' });
      form.reset();
      console.log('EmailJS Response:', result.text);

      // Timeout for auto-dismiss
      setTimeout(() => setNotification({ message: '', type: '' }), 4000);
    } catch (error) {
      setNotification({ message: 'There was an error sending your message. Please try again.', type: 'error' });
      console.error('EmailJS Error:', error);

      // Timeout for auto-dismiss
      setTimeout(() => setNotification({ message: '', type: '' }), 4000);
    }
  };

  return (
    <section id= "contact">
    <div>
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />

      <form onSubmit={form.onSubmit(handleSubmit)} className="form" data-aos="fade-up">
        <Title order={2} size="h1" ta="center" data-aos="fade-right">
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
          required
          {...form.getInputProps('message')}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
    </div>
    </section>
  );
}

export default GetInTouchSimple;
